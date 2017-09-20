(ns template.pages
  (:require-macros
    [cljs-slides.core :refer [defslide]]))

(defslide welcome
  [:div.flex-cc
   [:h1 "SSL-TLS: How to guide"]])

(defslide summary
  [:block<What_we_are_going_to_discuss>
   [:ul
    <->
    [:li "What is TLS/SSL & HTTPS?"]
    <->
    [:li "How does it work?"]
    [:ul
     [:li "TLS Handshake"]
     [:li "Certificate Chain"]]
    <->
    [:li "How to get it?"]
    <->
    [:li "Demos"]]])


(defslide what-is-it
  [:div "What is TLS?"])

(defslide how-does
  [:div "How does it work?"])

(defslide tls-handshake
  [:block<TLS_Handshake>
   [:div "Goal"]
   <->
   [:ul
    [:li.test "Establish secure tunnel of information"]]])

(defslide certificate-chain
  [:div "Certificate Chain"])

;; How to get it
(defslide how-to-get
  [[:h3 "How to get a TLS certificate?"]
   [:cols
    <1-> [:block<Self-Signed>
          <3->
          [:div "Advantages"]
          [:ul
           [:li "Free"]
           [:li "Encryption"]]
          <4->
          [:div "Drawbacks"]
          [:ul [:li "Not issued by CA"]]]
    <2-> [:block<Certification_Authority>
          <5->
          [:div "Advantages"]
          [:ul
           [:li "Encryption"]
           [:li "Issued by CA"]]
          <6->
          [:div "Drawbacks"]
          [:ul [:li "(Usually) Paid"]]]]])

(defslide lets-encrypt
  [:div
   [:h3 "Let's Encrypt"]
   <->
   [:img<300x> "/imgs/lets-encrypt.png"]])

;; Demo
(defslide demos
  [:block<List_of_demos>
   [:div "3 demos:"]
   [:ul
    <-> [:li "Self-Signed ExpressJS"]
    <-> [:li "TLS ExpressJS"]
    <-> [:li "TLS Apache2/httpd"]]])

;; Conclusion
(defslide question
  [:div.flex-cc
   [:h1 "To SSL or not to?"]])

(defslide thanks
  [:div.flex-cc
   [:h1 "Thanks!"]
   [:div
    [:span "Slides available at "]
    [:link "https://baspar.github.io/"]]
   [:div
    [:span "Notes available at "]
    [:link "https://baspar.github.io/NOTES.md"]]])

;; Groups
(def groups [["Introduction" [["Welcome" welcome]
                              ["Summary" summary]]]
             ["What is it?" [["What is TLS?" what-is-it]]]
             ["How does it work?" [["How does it work?" how-does]
                                   ["TLS Handshake" tls-handshake]
                                   ["Certificate Chain" certificate-chain]]]
             ["Get it" [["How to get a TLS" how-to-get]
                        ["Let's Encrypt" lets-encrypt]]]
             ["Demos" [["Demos" demos]]]
             ["Conclusion" [["To SSL or not to?" question]
                            ["Thanks!" thanks]]]])
