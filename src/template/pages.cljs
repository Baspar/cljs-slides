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
   [:block<List_of_stuff>
    "My list of stuff"
    [:ul
     <->
     [:li [:h3 "Stuff #1"]]
     <->
     <->
     [:li [:h3 "Stuff #2"]]
     <->
     [:li [:h3 "Stuff #3"]]
     <->
     [:li [:h3 "Stuff #4"]]
     <->
     [:li [:h3 "Stuff #5"]]
     <->
     [:li [:h3 "Stuff #6"]]]]])

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
