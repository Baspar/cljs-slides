(ns template.pages
  (:require-macros
    [cljs-slides.core :refer [defslide]]))

(defslide introduction
  [:cols
   [:block<Block> "test"]
   [:block<Block> "test"]
   [:question<Block> "test"]])

(defslide welcome
  [:rows
   [:cols
    [:h1 "Welcome"]]])

(defslide part1
  [:block<Part1_content>
   [:h1 "Reminder!"]
   [:div "List of todo"]
   [:ul
    <->
    [:li "todo1"]
    <->
    [:li "todo2"]]
   [:ul
    <->
    [:li "todo1"]
    <->
    [:li "todo2"]]])

(defslide part2
  [:block<Part1_content>
   [:h1 "Reminder!"]
   "List of todo"
   [:ul
    [:li "todo1"]
    [:li "todo2"]]])

(def groups {:groups [{:title "Introduction"
                       :slides [{:id :welcome
                                 :format welcome
                                 :title "Welcome"}
                                {:id :introduction
                                 :format introduction
                                 :title "Introduction"}]}
                      {:title "Organisation"
                       :slides [{:id :part1
                                 :format part1
                                 :title "Part 1"}
                                {:id :part2
                                 :format part2
                                 :title "Part 2"}]}]})
