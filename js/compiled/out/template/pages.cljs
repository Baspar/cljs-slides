(ns template.pages
  (:require-macros
    [cljs-slides.core :refer [defslide]]))

(defslide welcome
  [:rows
   [:cols
    [:h1 "Welcome"]]])

(defslide introduction
  [:rows
   [:cols
    <->
    [:block<Block> "test"]
    <->
    [:block<Block> "test"]
    <->
    [:question<Block> "test"]]
   <0->
   [:block<Block> "test"]])

(defslide part1
  [:cols
   [:rows
    [:block<1> 1]
    [:block<2> 2]
    <->
    [:block<3> 3]
    [:block<4> 4]]
   [:block<Image>]])

(defslide part2
  [:block<Part1_content>
   [:h1 "Reminder!"]
   "List of todo"
   [:ul
    [:li "todo1"]
    [:li "todo2"]]])

(def groups [["Introduction" [["Welcome" welcome]
                              ["Introduction" introduction]]]
             ["Organisation" [["Part 1" part1]
                              ["Part 2" part2 ]]]])
