(ns template.ui
  (:require
    [template.dispatch :as dispatch]
    [template.util :as util]
    [template.pages :as pages :refer [render-page]])
  (:require-macros
   [devcards.core :as dc :refer [defcard deftest]]
   [sablono.core :as sab :refer [html]]))

(def header
  [:svg {:height "20%"
            :width "100%"
            :viewBox "0 0 100 100"
            :preserveAspectRatio "none"}
      ;; SHADOW
      [:polygon {:points "0,0 100,0 100,100 86,30 0,100"
                 :fill "#e7e7e7"}]

      ;; YELLOW
      [:polygon {:points "85,0 100,100 100,0"
                 :fill "#fcbe13"}]
      [:polygon {:points "85,0 100,60 100,0"
                 :fill "#fcd123"}]

      ;; BLUE
      [:polygon {:points "0,0 100,0 0,80"
                 :fill "#039088"}]
      [:polygon {:points "0,0 50,0 0,80"
                 :fill "#02a89e"}]])
(defn title [state]
  [:div {:style {:transform "rotate(-6deg)"
                    :position "absolute"
                    :top "5%"
                    :font-size "40px"
                    :font-weight "bold"
                    :color "white"
                    :left "2%"}}
      (.createElement js/React js/React.addons.CSSTransitionGroup
                     #js {:transitionName (str "title-" (get @state :anim "next"))
                          :transitionLeave true
                          :transitionEnter true
                          :transitionLeaveTimeout 500
                          :transitionEnterTimeout 500}
                     (html [:div {:key ((util/get-group state) :title)
                                  :style {:width "50vw"
                                          :position "absolute"}}
                            ((util/get-group state) :title)]))])
(defn summary [state]
  [:div {:style {:z-index 2
                 :position "absolute"
                 :display "flex"
                 :max-width "100vw"
                 :max-height "100vh"
                 :pointer-events "none"
                 :overflow "hidden"}}
   [:div {:style {:height "100vh"
                  :width "100vw"
                  :background-color "rgba(100, 100, 100, 0.5)"
                  :display "flex"
                  :opacity (if (get @state :menu-visible false) 1 0)
                  :transform (str "scale(" (if (get @state :menu-visible false) "1)" "8)"))
                  :transition "all .3s ease-in-out"
                  :justify-content "center"
                  :align-items "center"}}
    [:div
     [:ul
      (map-indexed (fn [i1 x]
                     [:li [:div
                           (:title x)
                           [:ul
                            (map-indexed (fn [i2 y] [:li (:title y)]) (:slides x))]]])
           (@state :groups))]]
    [:div {:style {}}]
    ]])
(defn page [state]
  (html
    [:div
     (summary state)
     [:div {:style {:width "100vw"
                    :height "100vh"
                    :position "relative"
                    :overflow "hidden"
                    :-webkit-filter (str "blur(" (if (get @state :menu-visible false) 5 0) "px)")
                    :display "flex"
                    :flex-direction "column"
                    :align-items "center"
                    :transition "all 0.5s"
                    :background-color "white"}}
      header
      (title state)
      [:div {:style {:position "relative"
                     :perspective "1000px"
                     :height "75%"
                     :width "80%"}}
       (.createElement js/React js/React.addons.CSSTransitionGroup
                       #js {:transitionName (get @state :anim "next")
                            :transitionLeave true
                            :transitionEnter true
                            :transitionLeaveTimeout 500
                            :transitionEnterTimeout 500}
                       (html [:div {:key ((util/get-slide state) :id)
                                    :style {:height "100%"
                                            :width "100%"
                                            :position "absolute"
                                            :display "flex"
                                            :flex-direction "column"
                                            :align-items "center"}}
                              [:h1 (:title (util/get-slide state))]
                              [:div {:style {:position "relative"
                                             :display "flex"
                                             :flex-grow "1"
                                             :flex-direction "column"
                                             :align-items "stretch"
                                             ;:justify-content "space-around"
                                             :width "100%"}}
                               (render-page state)]]))]]]))

(defn app [state]
  "Show or transition between application pages"
  (page state))
