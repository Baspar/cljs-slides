(ns cljs-slides.core
  (:require [clojure.walk :refer [postwalk]]))

(defn question-block [title & objs]
  [:div
   [:div {:style {:background-color  "#fcbe13"
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
    (vec objs)]])
(defn block [title & objs]
  [:div
   [:div {:style {:background-color  "#039088"
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
    (vec objs)]])
(defn rows [& objs]
  [:div {:style {:flex-grow 1
                 :display "flex"
                 :flex-direction "column"
                 :justify-content "space-around"
                 :align-items "center"}}
  (mapv
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
                 :align-items "center"}}
  (mapv
    (fn [x] [:div {:style {:display "flex"
                           :flex-direction "column"
                           :flex-grow 1
                           :margin "0px 20px"}}
             x])
    objs)])

;; (defn count-pauses [node]
;;   (loop [x node]
;;     (->> x
;;          (map #(cond
;;                  (vector? %) (recur %)
;;                  (= % '<->) 1
;;                  :else 0))
;;          (reduce +))))

(defmacro defslide
  [slide-name slide-raw]
  (let [
        ;; nb-pause (count-pauses slide-raw)
        slide (postwalk #(if (and (vector? %)
                                  (< 0 (count %))
                                  (get #{:block :rows :cols :question-block} (first %)))
                           (case (first %)
                             :img [:img {:src (second %)}]
                             :block (apply block (rest %))
                             :rows (apply rows (rest %))
                             :cols (apply cols (rest %))
                             :question-block (apply question-block (rest %)))
                           %)
                        slide-raw)]
    `(def ~slide-name ~slide)))
