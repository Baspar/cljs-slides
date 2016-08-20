(ns template.ui_elements)

(defn question-block [title objs]
  [[:div {:style {:background-color  "#fcbe13"
                  :padding "10px"
                  :font-size "24px"
                  :color "white"}}
    title]
   [:div {:style {:flex-grow 1
                  :display "flex"
                  :flex-direction "column"
                  :padding "10px"
                  :background-color "#fcd123"}}
    objs]])
(defn block [title objs]
  [[:div {:style {:background-color  "#039088"
                  :padding "10px"
                  :font-size "24px"
                  :color "white"}}
    title]
   [:div {:style {:flex-grow 1
                  :display "flex"
                  :flex-direction "column"
                  :padding "10px"
                  :box-shadow "0 4px 2px -3px"
                  :background-color "#02a89e"}}
    objs]])
(defn cols [objs]
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
