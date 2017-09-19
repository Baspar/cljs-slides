(ns template.pages
  (:require-macros
    [cljs-slides.core :refer [defslide]]))

(defslide welcome
  [:div.flex-cc
   [:h1 "SSL-TLS: How to guide"]])

(defslide summary
  [:block<What_we_are_going_to_discuss>
   [:ul
    <-> [:li "What is TLS/SSL & HTTPS?"]
    <-> [:li "How does it work?"]
    [:ul
     [:li "TLS Handshake"]
     [:li "Certificate Chain"]]
    <-> [:li "How to get it?"]
    <-> [:li "Demos"]]])

(defslide tls-handshake
  [:block<TLS_Handshake>
   [:div "Goal"]
   <-> [:ul
        [:li.test "Establish secure tunnel of information"]]])

(defslide question
  [:div.flex-cc
   [:h1 "To SSL or not to?"]])

(defslide how-to-get
  [[:h3 "How to get a TLS certificate?"]
   [:cols
    <1-> [:block<Self-Signed>
          <4-> [:div "Advantages"]
          [:ul
           [:li "Free"]
           [:li "Encryption"]]
          <5-> [:div "Drawbacks"]
          [:ul [:li "Not issued by CA"]]]
    <2-> [:block<Certification_Authority>
          <6-> [:div "Advantages"]
          [:ul
           [:li "Encryption"]
           [:li "Issued by CA"]]
          <7-> [:div "Drawbacks"]
          [:ul [:li "Paid"]]]
    <3-> [:block<Let's_Encrypt>
          <8-> [:div "Advantages"]
          [:ul
           [:li "Free"]
           [:li "Issued by CA"]]
          <9-> [:div "Drawbacks"]
          [:ul
           [:li "No wilcard"]
           [:li "Short lifespan"]]]]])

(defslide lets-encrypt
  [:div "Let's Encrypt"])

(defslide demos
  [:block<List_of_demos>
   [:div "3 demos:"]
   [:ul
    <-> [:li "Self-Signed ExpressJS"]
    <-> [:li "TLS ExpressJS"]
    <-> [:li "TLS Apache2/httpd"]]])

(defslide thanks
  [:div.flex-cc
   [:h1 "Thanks!"]
   [:div
    [:span "Slides available at "]
    [:link "https://baspar.github.io/"]]
   [:div
    [:span "Notes available at "]
    [:link "https://baspar.github.io/NOTES.md"]]])

(def groups [["Introduction" [["Welcome" welcome]
                              ["Summary" summary]]]
             ["Get it" [["How to get a TLS" how-to-get]
                        ["Let's Encrypt" lets-encrypt]]]
             ["Demos" [["Demos" demos]]]
             ["Conclusion" [["To SSL or not to?" question]
                            ["Thanks!" thanks]]]])
