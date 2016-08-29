(ns template.pages
  (:require
    [template.ui_elements :as ui]))

(def introduction
  (ui/cols [(ui/block "Block" [])
            (ui/block "Block" [])
            (ui/question-block "Block" [])]))
(def welcome
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
                                    [:li "test2"]]
                                   (ui/block "end"
                                             [[:div "fini"]])])])))
(def part1
  (ui/block "Part1 content" [[:h1 "Reminder!"]
                             "List of todo"
                             [:ul
                              [:li "todo1"]
                              [:li "todo2"]]]))
(def part2
  (ui/rows
    [(ui/cols [(ui/block "1" ["1"]) (ui/block "2" ["2"])])
     (ui/cols [(ui/block "3" ["3"]) (ui/block "4" ["4"])])]))
(def default
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
