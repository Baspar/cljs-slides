(ns template.pages
  (:require-macros
    [cljs-slides.core :refer [defslide]]))

(defslide introduction
  [:cols [[:block "Block" []]
            [:block "Block" []]
            [:question-block "Block" []]]])
(defslide welcome
  [:block "Titre"
   (:cols
     [(:question-block "Subtitle1"
                       [:div "HELLO"])
      (:question-block "Subtitle2"
                       [:div "HELLO"])
      (:question-block "Subtitle3"
                       [:div "HELLO"])
      (:question-block "Subtitle4"
                       [[:div "HELLO"]
                        [:div "HELLO"]
                        [:ul
                         [:li "test1"]
                         [:li "test2"]]
                        (:block "end"
                                [[:div "fini"]])])])])
(defslide part1
  [:block "Part1 content" [[:h1 "Reminder!"]
                           "List of todo"
                           [:ul
                            [:li "todo1"]
                            [:li "todo2"]]]])
(defslide part2
  [:rows
   [:cols
    [:block "1" ["1"]]
    [:block "2" ["2"]]]
   [:cols
    [:block "3" ["3"]]
    [:block "4" ["4"]]]])
(defslide default
  [:div "Please provide a template for this slide in the file pages.cljs" ])


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
                                 :title "Part 2"}]}
                      {:title "Conclusion"
                       :slides [{:id :conclusion
                                 :format default
                                 :title "Conclusion"}
                                {:id :question?
                                 :format default
                                 :title "Question?"}]}]})
