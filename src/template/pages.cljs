(ns template.pages
  (:require-macros
    [cljs-slides.core :refer [defslide]]))

;; Introduction
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
     [:li "Certificate"]]
    <->
    [:li "How to get it?"]
    <->
    [:li "Demos"]]])

;; What is it ?
(defslide what-is-it ;; TODO
  [:div.flex-cc
   [:h1 "What is TLS?"]])

;; How does it work?
(defslide how-does ;; TODO
  [:div.flex-cc
   [:h1 "How does it work?"]])
(defslide tls-handshake
  [:block<TLS_Handshake>
   [:cols
    [:div
     "Goal: "
     <->
     [:span "Exchange symmetric keys securely"]
     <->
     [:h3 "4 steps:"]
     [:ul
      <->
      [:li "Client Hello"]
      <->
      [:li "Server public key"]
      <->
      [:li "Client symmetric key"]
      <->
      [:li "Handshake over"]]]
    <2-> [:img<400x> "/imgs/Sequence.svg"]]])
(defslide certificate ;; TODO
  [:div "Certificate"])
(defslide type-certificate
  [:div
   [:h3 "3 main types of Certificate"]
   [:cols
    <-> [:ul
         [:li "Self-Signed"]
         [:img<x100> "/imgs/self-signed.jpg"]
         [:div "(Allows *)"]]
    <-> [:ul
         [:li "CA w/ Domain Verification"]
         [:img<x100> "/imgs/DV.jpg"]
         [:div "(Allows *)"]]
    <-> [:ul
         [:li "CA w/ Extended Verification"]
         [:img<x100> "/imgs/EV.jpg"]
         [:div "(Does not allow *)"]]]])

;; How to get it
(defslide how-to-get
  [:div.flex-cc
   [:h1 "How to get a TLS certificate?"]])
(defslide different-ways
  [[:h3 "2 ways to get it:"]
   [:cols
    <1-> [:block<Self-Signed>
          <3->
          [:div "Advantages"]
          [:ul
           [:li "Free"]
           [:li "Encryption"]]
          <4->
          [:div "Drawbacks"]
          [:ul [:li "Not issued by a Certification Authority"]]]
    <2-> [:block<Certification_Authority>
          <5->
          [:div "Advantages"]
          [:ul
           [:li "Encryption"]
           [:li "Issued by a Certification Authority"]]
          <6->
          [:div "Drawbacks"]
          [:ul [:li "(Usually) Paid"]]]]])
(defslide lets-encrypt
  [[:h3 "Let's Encrypt"]
   [:cols
    [:ul
     <->
     [:li "Certification Authority"]
     [:div "(Linux Foundation project)"]
     <->
     [:li "Sponsored by Mozilla, Chrome, OVH, ..."]
     <->
     [:li "Easy to set up"]
     [:img<x150> "/imgs/certbot.svg"]
     <->
     [:li "Free!"]
     ]
    <0->
    [:img<300x> "/imgs/lets-encrypt.png"]]])

;; Demo
(defslide demos
  [:block<List_of_demos>
   [:div "3 demos:"]
   [:ul
    <-> [:li "Self-Signed ExpressJS"]
    <-> [:li "TLS ExpressJS"]
    <-> [:li "TLS Apache2/httpd"]]])

;; Conclusion
(defslide conclusion
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
                                   ["Certificate Chain" certificate]
                                   ["Type of Certificate" type-certificate]]]
             ["Get it" [["How to get a TLS" how-to-get]
                        ["2 different ways" different-ways]
                        ["Let's Encrypt" lets-encrypt]]]
             ["Demos" [["Demos" demos]]]
             ["Conclusion" [["To SSL or not to?" conclusion]
                            ["Thanks!" thanks]]]])
