(ns cljs-slides.core
  (:require [clojure.walk :refer [postwalk]]))

;; UI Elements
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

;; Helpers
(defn count-pauses [node]
  (->> node
       (map #(cond
               (vector? %) (count-pauses %)
               (list? %) (count-pauses %)
               (= % '<->) 1
               :else 0))
       (reduce + 0)))
(defn component? [x]
  (and (vector? x)
       (< 0 (count x))
       (keyword? (first x))))

;; Slides modifiers
(defn assign-value-pause
  ([node]
   (last (assign-value-pause 1 node)))
  ([pause node]
   (cond
     (vector? node) (reduce (fn [[old-pause buf] element]
                              (let [[new-pause new-element] (assign-value-pause old-pause element)]
                                [new-pause (vec (concat buf [new-element]))]))
                            [pause []]
                            node)
     (= '<-> node) [(inc pause) (str "<" pause "->")]
     :else [pause node])))

;; Main Macro
(defmacro defslide
  [slide-name slide-raw]
  (let [nb-pause (count-pauses slide-raw)
        slide (->> slide-raw
                   (assign-value-pause)
                   (postwalk #(when (not= '<-> %) %))
                   (postwalk #(if (component? %)
                                (filterv some? %)
                                %))
                   (postwalk #(let [rows? (and (component? %) (= (first %) :rows))
                                    cols? (and (component? %) (= (first %) :cols))
                                    block? (and (component? %) (re-matches #"block<(.*)>" (name (first %))))
                                    question? (and (component? %) (re-matches #"question<(.*)>" (name (first %))))]
                                (cond
                                  rows? (apply rows (rest %))
                                  cols? (apply cols (rest %))
                                  block? (apply block (clojure.string/replace (last block?) "_" " ")
                                                (rest %))
                                  question? (apply question-block (clojure.string/replace (last question?) "_" " ")
                                                   (rest %))
                                  :else %))))]
    `(def ~slide-name {:slide ~slide
                       :nb-pauses ~nb-pause})))
