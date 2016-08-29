(ns template.core
  (:require
   [template.ui :as ui]
   [template.util :as util]
   [template.state :as state]))

(enable-console-print!)

(defn render-app [dom-node]
  "Return an atom watcher fn
  to render the root React app component to dom-node."
  (fn [_ a o n]
    (.render js/ReactDOM (ui/page a) dom-node)))

(defn main []
  "Conditionally start the app based on whether the #main-app-area
  node is on the page."
  (when-let [node (.getElementById js/document "main-app-area")]
    (do
      (add-watch state/app-state :render
                 (render-app node))
      (.render js/ReactDOM (ui/page state/app-state) node))))

(main)
(set! (.-onkeydown js/document)
      #(if (or (= 37 (.-keyCode %)) (= 8 (.-keyCode %)))
         (util/go-to-previous state/app-state)
         (if (or (= 39 (.-keyCode %)) (= 32 (.-keyCode %)))
           (util/go-to-next state/app-state)
           (if (= 13 (.-keyCode %))
             (swap! state/app-state update :menu-visible (fn [x] (not x)))
             (println "Keycode:" (.-keyCode %))))))
