(ns leiningen.new.cljs-slides
  (:require [leiningen.new.templates :refer [renderer name-to-path ->files]]
            [leiningen.core.main :as main]))

(def render (renderer "cljs-slides"))

(defn cljs-slides
  "FIXME: write documentation"
  [name]
  (let [data {:name name
              :sanitized (name-to-path name)}]
    (main/info "Generating fresh 'lein new' cljs-slides project.")
    (->files data
             ["project.clj" (render "project.clj" data)]
             ["src/{{sanitized}}/core.cljs" (render "core.cljs" data)]
             ["resources/public/css/custom.css" (render "custom.css" data)]
             ["resources/public/css/cljs_slides_style.css" (render "cljs_slides_style.css" data)]
             ["resources/public/index.html" (render "index.html" data)])))
