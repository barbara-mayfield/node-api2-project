const express = require("express")
const db = require("../data/db");
const router = express.Router({
    mergeParams: true,
})

// ### Blog Post Schema

// A Blog Post in the database has the following structure:

// ```js
// {
//   title: "The post title", // String, required
//   contents: "The post contents", // String, required
//   created_at: Mon Aug 14 2017 12:50:16 GMT-0700 (PDT) // Date, defaults to current date
//   updated_at: Mon Aug 14 2017 12:50:16 GMT-0700 (PDT) // Date, defaults to current date
// }
// ```

// get (/api/posts) returns an array of all the post objects

router.get("/", (req, res) => {    
    db.find()
        .then(posts => {
            res.status(200).json(posts)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: "The posts information could not be retrieved." })
        })
})

// get (/api/posts/:id) returns the post object with the specified id

// post (/api/posts) creates a post using the info sent inside the request body

router.post("/", (req, res) => {
    if(!req.body.title || !req.body.contents) {
        return res.status(400).json({ errorMessage: "Please provide title and contents for the post" })
    }

    db.insert(req.body)
        .then(post => {
            res.status(201).json(post)
        })
        .catch(err => {
            console.log(error)
            res.status(500).json({ error: "There was an error while saving the post to the database" })
        })
})

// put (/api/posts/:id) updates the post with the specified id using data from the request body. 
// Returns modified document, not the original.


// delete (/api/posts/:id) removes the post with the specified id and returns the deleted post object

module.exports = router;