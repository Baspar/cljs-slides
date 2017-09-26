(ns template.core
  (:require
    [cljs-slides.core :refer [defgroups] :refer-macros [defslide]]))

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

;; How does it work?
(defslide how-does
  [:div.flex-cc
   [:h1 "How does it work?"]])
(defslide encryption-type
  [[:h3 "Encryption types"]
   [:cols
    <0->
    [:block<Symmetric_Encryption>
     <->
     [:div "+ Fast"]
     <->
     [:div "- Key sent in clear"]
     <->
     [:div "- 1 user = 1 key"]
     [:div "Ex:"]
     <->
     [:ul
      [:li "Caesar cipher"]
      [:li "AES-256"]]]
    <0->
    [:block<Asymmetric_Encryption>
     <->
     [:div "+ Public/Private key"]
     <->
     [:div "+ Only 1 key pair"]
     <->
     [:div "- Slow"]
     [:div "Ex:"]
     <->
     [:ul
      [:li "RSA"]
      [:li "SHA-256"]]]]])
(defslide tls-handshake
  [:block<TLS_Handshake>
   [:cols
    [:div
     "Goal: "
     <->
     [:span "Establish a secure channel"]
     <->
     [:h3 "4 steps:"]
     [:ul
      <->
      [:li "Client Hello"]
      [:li "Server public key"]
      [:li "Client symmetric key"]
      [:li "Handshake over"]]]
    <2-> [:img<400x> "/imgs/Sequence.svg"]]])
(defslide certificate
  [:block<Certificate>
   [:div "Represents online identity for the website"]
   [:div "At root level, approved by a Certification Authority"]
   [:div "Verified by a chain of trust"]])
(defslide chain-of-trust
  [:block<Chain_of_trust>
   [:ul
    [:li "List of intermediate issuer certificate"]
    ]
   [:img<x300> "/imgs/chain-of-trust.svg"]]
  )
(defslide type-certificate
  [:block<3_main_types_of_Certificate>
   [:rows
    [:cols
     <-> [:ul
          [:li "Self-Signed (Allows *)"]
          [:img<x100> "/imgs/self-signed.jpg"]]
     <-> [:ul
          [:li "CA w/ Domain Verification (Allows *)"]
          [:img<x100> "/imgs/DV.jpg"]]]
    <-> [:ul
         [:li "CA w/ Extended Verification (Does not allow *)"]
         [:img<x100> "/imgs/EV.jpg"]]]])

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
     [:li "Free!"]]
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
(defgroups [["Introduction" [["Welcome" welcome]
                             ["Summary" summary]]]
            ["What is it?" [["What is TLS?" what-is-it]
                            ["History TLS" history-tls]
                            ["Keypoints" keypoints-tls]]]
            ["How does it work?" [["How does it work?" how-does]
                                  ["Type of Encryption" encryption-type]
                                  ["TLS Handshake" tls-handshake]
                                  ["Certificate" certificate]
                                  ["Chain of Trust" chain-of-trust]
                                  ["Type of Certificate" type-certificate]]]
            ["Get it" [["How to get a TLS" how-to-get]
                       ["2 different ways" different-ways]
                       ["Let's Encrypt" lets-encrypt]]]
            ["Demos" [["Demos" demos]]]
            ["Conclusion" [["To SSL or not to?" conclusion]
                           ["Thanks!" thanks]]]])
