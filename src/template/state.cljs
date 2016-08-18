(ns template.state
  (:require-macros
   [devcards.core :as dc :refer [defcard deftest]]
   [sablono.core :as sab :refer [html]]))

(defonce app-state (atom {:groups [{:title "Introduction"
                                    :slides [{:id :welcome
                                              :title "Welcome"}
                                             {:id :introduction
                                              :title "Introduction"}]}
                                   {:title "Organisation"
                                    :slides [{:id :part1
                                              :title "Part 1"}
                                             {:id :part2
                                              :title "Part 2"}]}
                                   {:title "Conclusion"
                                    :slides [{:id :conclusion
                                              :title "Conclusion"}
                                             {:id :question?
                                              :title "Question?"}]}]}))
