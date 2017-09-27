(defproject cljs-slides "0.1.0"
  :description "Plugin to facilitate slides creation in ClojureScript"
  :url "https://github.com/Baspar/cljs-slides"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.8.51"]
                 [sablono "0.7.1" :exclusions [cljsjs/react]]

                 [cljsjs/react-with-addons "15.3.0-0"]
                 [cljsjs/react-dom "15.3.0-0" :exclusions [cljsjs/react]]])
