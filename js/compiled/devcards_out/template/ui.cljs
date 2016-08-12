(ns template.ui
  (:require
   [template.dispatch :as dispatch])
  (:require-macros
   [devcards.core :as dc :refer [defcard deftest]]
   [sablono.core :as sab :refer [html]]))


(defn page [state]
  (html
    [:div {:style {:width "90vw"
                   :height "90vh"
                   :display "flex"
                   :flex-direction "column"
                   :justify-content "space-around"
                   :align-items "center"
                   :overflow "hidden"
                   :background-color "grey"}}
     #_[:div {:style {:display "flex"
                    :width "50%"
                    :justify-content "space-between"}}
      [:div {:on-click #(swap! state (fn [x] (-> x
                                                 (assoc :anim "previous")
                                                 (update :cpt dec))))
             :style {:background-color "red"
                     :cursor "pointer"
                     :padding "5px 10px"}}
       "[-]"]
      [:div {:on-click #(swap! state (fn [x] (-> x
                                                 (assoc :anim "next")
                                                 (update :cpt inc))))
             :style {:background-color "green"
                     :cursor "pointer"
                     :padding "5px 10px"}}
       "[+]"]]
     [:div {:style {:position "relative"
                    :height "70%"
                    :perspective "1000px"
                    :width "70%"}}
      (.createElement js/React js/React.addons.CSSTransitionGroup
                      #js {:transitionName (@state :anim)
                           :transitionLeave true
                           :transitionEnter true
                           :transitionLeaveTimeout 500
                           :transitionEnterTimeout 500}
                      (html [:div {:key (get @state :cpt 0)
                                   :style {:background-color "white"
                                           :border-radius "30px"
                                           :box-shadow "0px 0px 3px 0px black"
                                           :height "100%"
                                           :width "100%"
                                           :position "absolute"
                                           :display "flex"
                                           :justify-content "center"
                                           :align-items "center"
                                           }}
                             [:div
                              (get @state :cpt 0)]]))]]))

(defn app
  "Show or transition between application pages"
  ([state]
   (page state))

  #_([state transition-name transistion-timeout]
   (.createElement
    js/React js/React.addons.CSSTransitionGroup
    #js {:transitionName transition-name
         :transitionTimeout transistion-timeout
         :transitionEnterTimeout transistion-timeout
         :transitionLeaveTimeout transistion-timeout
         :transitionAppear true
         :transitionAppearTimeout transistion-timeout}
    (page state))))
