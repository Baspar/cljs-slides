(ns template.ui
  (:require
    [template.pages :refer [groups]]
    [template.util :as util])
  (:require-macros
   [sablono.core :as sab :refer [html]]))

(defn render-page
  ([state page]
   (html [:div {:key ((util/get-slide state page) :id)
                :style {:height "100%"
                        :width "100%"
                        :position "absolute"
                        :display "flex"
                        :flex-direction "column"
                        :align-items "center"}}
          [:h1 (:title (util/get-slide state page)) \( (get-in (util/get-slide state page) [:format :nb-pauses]) \)]
          [:div {:style {:position "relative"
                         :display "flex"
                         :flex-grow "1"
                         :flex-direction "column"
                         :align-items "stretch"
                         :width "100%"}}
           (get-in (util/get-slide state page) [:format :slide])]]))
  ([state]
   (render-page state (get @state :slide-shown [0 0]))))

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
                 :pointer-events (if (get @state :menu-visible false) "auto" "none")
                 :overflow "hidden"}}
   [:div {:on-click #(swap! state (fn [x] (-> x
                                              (dissoc :highlight)
                                              (assoc :menu-visible false))))
          :style {:height "100vh"
                  :width "100vw"
                  :background-color "rgba(100, 100, 100, 0.5)"
                  :display "flex"
                  :opacity (if (get @state :menu-visible false) 1 0)
                  :transform (str "scale(" (if (get @state :menu-visible false) "1)" "8)"))
                  :transition "transform .3s ease-in-out,
                               opacity .3s"
                  :justify-content "center"
                  :align-items "center"}}
    [:div {:style {:transform "translateX(10vw)"}}
     (map-indexed (fn [i1 x]
                    (println (str "Groupe" i1))
                    [:div {:style {:padding "5px"
                                   :font-size "24px"}}
                     (:title x)
                     (map-indexed (fn [i2 y] [:div {:on-mouse-enter #(swap! state assoc :highlight [i1 i2])
                                                    :on-mouse-leave #(swap! state dissoc :highlight)
                                                    :on-click #(do (swap! state (fn [x] (-> x
                                                                                        (dissoc :highlight)
                                                                                        (assoc :menu-visible false))))
                                                                   (util/go-to state [i1 i2]))
                                                    :style {:text-align "center"
                                                            :margin-left "40px"
                                                            :padding "5px"
                                                            :margin-top "5px"
                                                            :font-size "16px"
                                                            :opacity (if (= [i1 i2] (@state :highlight)) 1 0.5)
                                                            :cursor "pointer"
                                                            :background-color "grey"}}
                                              (:title y)])
                                  (:slides x))])
                  (:groups groups))]
    [:div {:style {:height "100vh"
                   :width "100vw"
                   :transform "scale(.4)"
                   :background-color "white"
                   :border "solid white 15px"
                   :opacity (if (@state :highlight) 1 0)}}
     (when-let [page (@state :highlight)]
       (render-page state page))]]])
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
                    :transition "-webkit-filter 0.5s"
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
                       (render-page state))]]]))

(defn app [state]
  "Show or transition between application pages"
  (page state))
