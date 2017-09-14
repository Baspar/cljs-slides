(ns cljs-slides.core
  (:require [clojure.walk :refer [postwalk]]))

;; UI Helper
(defn opacity-fn [params]
  (let [from-pause (get params :from)
        to-pause (get params :to)]
    {:transition "opacity .3s ease-in-out"
     :opacity `(if (< ~'pause ~from-pause) 0 1)}))

;; UI Elements
(defn question-block [title params & objs]
  [:div {:style (opacity-fn params)}
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
(defn block [title params & objs]
  [:div {:style (opacity-fn params)}
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
(defn rows [params & objs]
  [:div {:style (merge {:flex-grow 1
                        :display "flex"
                        :flex-direction "column"
                        :justify-content "space-around"
                        :align-items "center"}
                       (opacity-fn params))}
     (mapv
       (fn [x] [:div {:style {:display "flex"
                              :flex-direction "column"
                              :flex-grow 1
                              :margin "20px 0px"}}
                x])
       objs)])
(defn cols [params & objs]
  [:div {:style (merge {:flex-grow 1
                        :display "flex"
                        :justify-content "space-around"
                        :align-items "center"}
                       (opacity-fn params))}
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
(defn list-specified-breakpoints [node]
  (let [res (and (symbol? node)
                 (or (re-matches #"<-(\d+)>" (str node))
                     (re-matches #"<(\d+)->" (str node))
                     (re-matches #"<(\d+)-(\d+)>" (str node))))]
    (cond
      (vector? node) (->> node
                          (keep list-specified-breakpoints)
                          (mapcat identity)
                          (vec))
      (and (symbol? node) res) (mapv read-string (rest res))
      :else nil)))
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
     (= '<-> node) [(inc pause) (symbol (str "<" pause "->"))]
     :else [pause node])))
(defn assign-visibility
  ([node]
   (last (assign-visibility 0 node)))
  ([pause node]
   (let [pause? (and (symbol? node) (re-matches #"<(\d*)->" (str node)))
         pause-from (when pause? (read-string (second pause?)))
         visibility-map {:from pause}]
     (cond
       pause? [pause-from nil]
       (component? node) (let [component-type (first node)
                               component-children (rest node)]
                           (reduce (fn [[old-pause buf] element]
                                     (let [[new-pause new-element] (assign-visibility old-pause element)]
                                       [new-pause (vec (concat buf [new-element]))]))
                                   [pause [component-type visibility-map]]
                                   component-children))
       :else [pause node]))))

;; Main Macro
(defmacro defslide
  [slide-name slide-raw]
  (let [nb-pause (count-pauses slide-raw)
        specified-breakpoints (list-specified-breakpoints slide-raw)
        breakpoints (->> (concat (range (max 1 nb-pause)) specified-breakpoints)
                         (into #{})
                         (into [])
                         (sort)
                         (vec))
        slide-fn (symbol (str slide-name "-fn"))
        slide (->> slide-raw
                   (assign-value-pause)
                   (assign-visibility)
                   (postwalk #(if (component? %) (filterv some? %) %))
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
                                  ;; (component? %) (let [params (second %)
                                  ;;                      from-pause (get params :from)
                                  ;;                      to-pause (get params :to)]
                                  ;;                  (vec (concat
                                  ;;                         [(first %)]
                                  ;;                         [{:style {:transition "opacity .3s ease-in-out"
                                  ;;                                   :opacity `(if (< ~'pause ~from-pause) 0 1)}}]
                                  ;;                         (rest (rest %)))))
                                  :else %))))]
    `(def ~slide-name {:slide (fn [~'pause] ~slide)
                       :breakpoints ~breakpoints
                       :nb-pauses ~(dec (count breakpoints))})))
