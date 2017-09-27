(ns cljs-slides.core
  (:require
    [sablono.core]
    [cljs-slides.ui :as ui]
    [cljs-slides.util :as util]))

(enable-console-print!)

(defonce app-state (atom {:slide-shown [0 0 0]}))

(defn render-app [dom-node]
  "Return an atom watcher fn
  to render the root React app component to dom-node."
  (fn [_ a o n]
    (.render js/ReactDOM (ui/page a) dom-node)))

(def main
  "Conditionally start the app based on whether the #main-app-area
  node is on the page."
  (memoize
    (fn []
      (when-let [node (.getElementById js/document "main-app-area")]
        (do
          (add-watch app-state :render
                     (render-app node))
          ((render-app node) nil app-state nil nil))))))

(defn set-touch-handler []
  (let [mem (atom {:x 0
                   :delta 0})]
    (set! (.-ontouchstart js/document)
          #(let [x (-> % (.-touches) (aget 0) (.-pageX))]
             (reset! mem {:x x :delta 0})))
    (set! (.-ontouchmove js/document)
          #(let [x (-> % (.-touches) (aget 0) (.-pageX))
                 delta (- (@mem :x) x)]
             (reset! mem {:x x :delta delta})))
    (set! (.-ontouchend js/document)
          #(let [delta (@mem :delta)]
             (cond
               (<= 0 delta) (util/go-to-next app-state)
               (> -5 delta) (util/go-to-previous app-state))))))

(defn set-key-handler []
  (set! (.-onkeydown js/document)
        #(cond
           (or (= 37 (.-keyCode %)) (= 8 (.-keyCode %))) (util/go-to-previous app-state)
           (or (= 39 (.-keyCode %)) (= 32 (.-keyCode %))) (util/go-to-next app-state)
           (= 13 (.-keyCode %)) (swap! app-state update :menu-visible not))))

(defn defgroups [groups]
  (swap! app-state assoc :groups groups)
  (set-key-handler)
  (set-touch-handler)
  (main))
