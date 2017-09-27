(defproject template "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :min-lein-version "2.5.3"

  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.8.51"]
                 [cljs-slides "1.0.0"]]

  :plugins [[lein-figwheel "0.5.3-2"]
            [lein-cljsbuild "1.1.3" :exclusions [org.clojure/clojure]]]

  :clean-targets ^{:protect false} ["resources/public/js/compiled"
                                    "target"]

  :source-paths ["src"]

  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src"]
                        :figwheel true
                        :compiler {:main       "template.core"
                                   :asset-path "js/compiled/out"
                                   :output-to  "resources/public/js/compiled/template.js"
                                   :output-dir "resources/public/js/compiled/out"
                                   :source-map-timestamp true}}
                       {:id "prod"
                        :source-paths ["src"]
                        :compiler {:main       "template.core"
                                   :asset-path "js/compiled/out"
                                   :output-to  "resources/public/js/compiled/template.js"
                                   :optimizations :advanced}}]}

  :figwheel {:css-dirs ["resources/public/css"]})
