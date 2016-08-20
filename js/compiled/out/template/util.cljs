(ns template.util)

;; Get info about group/slide
(defn get-group
  ([state]
   (let [slide (get @state :slide-shown [0 0])]
     (get-group state slide)))
  ([state slide]
   (get-in @state [:groups (first slide)])))
(defn get-slide
  ([state]
   (let [slide (get @state :slide-shown [0 0])]
     (get-slide state slide)))
  ([state slide]
   (get-in @state [:groups (first slide) :slides (last slide)])))

;; Get id about next/previous slide
(defn whos-previous
  ([state]
   (whos-previous state (get @state :slide-shown [0 0])))
  ([state slide]
   (let [this-group (first slide)
         this-slide (last slide)
         prev-group (- this-group 1)
         prev-slide (- this-slide 1)
         nb-prev-group (count (get-in @state [:groups prev-group :slides]))]
   (if (get-slide state [this-group prev-slide])
     [this-group prev-slide]
     (if (get-slide state [prev-group (- nb-prev-group 1)])
       [prev-group (- nb-prev-group 1)])))))
(defn whos-next
  ([state]
   (whos-next state (get @state :slide-shown [0 0])))
  ([state slide]
   (let [this-group (first slide)
         this-slide (last slide)
         next-group (+ this-group 1)
         next-slide (+ this-slide 1)]
     (if (get-slide state [this-group next-slide])
       [this-group next-slide]
       (if (get-slide state [next-group 0])
         [next-group 0])))))

;; Check if next/previous slide are reachable
(defn can-go-previous?
  ([state]
   (can-go-previous? state (get-slide state)))
  ([state slide]
   (not (nil? (whos-previous state slide)))))
(defn can-go-next?
  ([state]
   (can-go-next? state (get-slide state)))
  ([state slide]
   (not (nil? (whos-next state slide)))))

;; Go to spesific slide or next/previous
(defn go-to [state slide]
  (let [current-slide (get @state :slide-shown [0 0])]
    (swap! state #(-> %
                      (assoc :slide-shown slide)
                      (assoc :anim (if (= 1 (compare current-slide slide))
                                     "previous"
                                     "next"))))))
(defn go-to-previous [state]
  (when-let [slide (whos-previous state)]
    (go-to state slide)))
(defn go-to-next [state]
  (when-let [slide (whos-next state)]
    (go-to state slide)))
