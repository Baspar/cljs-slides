(ns template.core
  (:require
   [sablono.core :as sab :include-macros true]
   [clojure.string :as str]
   [template.dispatch :as dispatch]
   [template.ui :as ui]
   [template.state :as state]
   [template.cards.app :as app]
   [cljs.core.async :refer [chan put! <!]]))

(enable-console-print!)

(defn render-app [dom-node]
  "Return an atom watcher fn
  to render the root React app component to dom-node."
  (fn [_ a o n]
    (.render js/ReactDOM (ui/page a) dom-node)))

(defn main []
  "Conditionally start the app based on whether the #main-app-area
  node is on the page."
  (if-let [node (.getElementById js/document "main-app-area")]
    (do (add-watch state/app-state :render
               (render-app node))
        (.render js/ReactDOM (ui/page state/app-state) node))))

(main)
(set! (.-onkeydown js/document) #(swap! state/app-state (fn [m] (if (= 37 (.-keyCode %))
                                                                  (-> m
                                                                      (update :cpt dec)
                                                                      (assoc :anim "previous"))
                                                                  (if (= 39 (.-keyCode %))
                                                                    (-> m
                                                                      (update :cpt inc)
                                                                      (assoc :anim "next"))
                                                                    m)))))

;; remember to run lein figwheel and then browse to
;; http://localhost:3449/cards.html
