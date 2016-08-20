(ns template.pages
  (:require
    [template.ui_elements :as ui]
    [template.util :as util])
  (:require-macros
   [sablono.core :as sab :refer [html]]))

(defmulti render-page
  (fn [state]
    ((util/get-slide state) :id))
  :default :default)

(defmethod render-page :welcome [state]
  (ui/block "Titre"
            (ui/cols
              [(ui/question-block "Subtitle1"
                                  [:div "HELLO"])
               (ui/question-block "Subtitle2"
                                  [:div "HELLO"])
               (ui/question-block "Subtitle3"
                                  [:div "HELLO"])
               (ui/question-block "Subtitle4"
                                  [[:div "HELLO"]
                                   [:div "HELLO"]
                                   [:ul
                                    [:li "test1"]
                                    [:li "test2"]
                                    [:li "test3"]
                                    [:li "test4"]
                                    [:li "test5"]]
                                   (ui/block "end"
                                             [[:div "fini"]])])])))
(defmethod render-page :default [state]
  (let [slide (:id (util/get-slide state))]
   [:div (str "Please provide key for" slide) ]))
