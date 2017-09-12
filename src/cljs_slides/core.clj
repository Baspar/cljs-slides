(ns cljs-slides.core
  (:require [clojure.walk :as w]))

(defn question-block [title & objs]
  [[:div {:style {:background-color  "#fcbe13"
                  :padding "10px"
                  :font-size "24px"
                  :color "white"}}
    title]
   [:div {:style {:flex-grow 1
                  :display "flex"
                  :flex-direction "column"
                  :padding "20px"
                  :box-shadow "0 4px 2px -3px"
                  :background-color "#fcd123"}}
    objs]])
(defn block [title & objs]
  [[:div {:style {:background-color  "#039088"
                  :padding "10px"
                  :font-size "24px"
                  :color "white"}}
    title]
   [:div {:style {:flex-grow 1
                  :display "flex"
                  :flex-direction "column"
                  :padding "20px"
                  :box-shadow "0 4px 2px -3px"
                  :background-color "#02a89e"}}
    objs]])
(defn rows [& objs]
  [:div {:style {:flex-grow 1
                 :display "flex"
                 :flex-direction "column"
                 :justify-content "space-around"
                 :align-items "stretch"}}
  (map
    (fn [x] [:div {:style {:display "flex"
                           :flex-direction "column"
                           :flex-grow 1
                           :margin "20px 0px"}}
             x])
    objs)])
(defn cols [& objs]
  [:div {:style {:flex-grow 1
                 :display "flex"
                 :justify-content "space-around"
                 :align-items "stretch"}}
  (map
    (fn [x] [:div {:style {:display "flex"
                           :flex-direction "column"
                           :flex-grow 1
                           :margin "0px 20px"}}
             x])
    objs)])

(defmacro defslide
  [slide-name slide-raw]
  (let [slide (w/postwalk #(if (and (vector? %)
                                    (< 0 (count %))
                                    (#{:block :rows :cols :question-block} (first %)))
                             (case (first %)
                               :block (apply block (rest %))
                               :rows (apply block (rest %))
                               :cols (apply block (rest %))
                               :question-block (apply block (rest %)))
                             %)
                          slide-raw)]
    `(def ~slide-name ~slide)))
