const express = require("express")
let db = require("../data/db");

const router = express.Router({
    mergeParams: true
})

// ### Comment Schema 
//
// A Comment in the database has the following structure:
//
// ```js
// {
//   text: "The text of the comment", // String, required
//   post_id: "The id of the associated post", // Integer, required, must match the id of a post entry in the database
//   created_at: Mon Aug 14 2017 12:50:16 GMT-0700 (PDT) // Date, defaults to current date
//   updated_at: Mon Aug 14 2017 12:50:16 GMT-0700 (PDT) // Date, defaults to current date
// }
// ```

// get (/api/posts/:id/comments) returns array of all comment objects associated with the post with the specified id
router.get("/", (req, res) => {
    const id = req.params.id;

    db.findPostComments(id)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(500).json({ error: "The post with the specified ID does not exist." })
        })
})

// post (/api/posts/:id/comments) creates a comment for the post with the specified id using the infromation sent inside of the request

module.exports = router;