(ns template.pages
  (:require [template.util :as util])
  (:require-macros
   [sablono.core :as sab :refer [html]]))

(defmulti render-page
  (fn [state]
    ((util/get-slide state) :id))
  :default :default)

(defmethod render-page :default [state]
  (let [slide (:id (util/get-slide state))]
   [:div (str "Please provide key for" slide) ]))
