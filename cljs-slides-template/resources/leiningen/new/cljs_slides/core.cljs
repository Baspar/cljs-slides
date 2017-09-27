(ns {{name}}.core
  (:require
    [cljs-slides.core :refer [defgroups] :refer-macros [defslide]]))

(defslide what-is-it
  [:div.flex-cc
   [:h1 "What is TLS?"]])
(defslide history-tls
  [:div
   [:h3 "TLS (Transport Layer Security)"]
   [:block<History>
    [:ul
     <-> [:li "1995: SSL 1.0 (Netscape)"]
     <-> [:li "1999: TLS 1.0"]
     <-> [:li "Currently: TLS 1.2"]
     <-> [:li "Future: TLS 1.3"]]]])
(defslide keypoints-tls
  [:div
   [:h3 "3 keypoints of TLS:"]
   [:ul
    <-> [:li "Confidentiality (Encryption)"]
    <-> [:li "Integrity"]
    <-> [:li "Authenticity"]]])


(defgroups [["What is it?" [["What is TLS?" what-is-it]
                            ["History TLS" history-tls]
                            ["Keypoints" keypoints-tls]]]])
