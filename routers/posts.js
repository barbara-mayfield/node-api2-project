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

// post (/api/posts) creates a post using the info sent inside the request body

// get (/api/posts) returns an array of all the post objects

// get (/api/posts/:id) returns the post object with the specified id

// delete (/api/posts/:id) removes the post with the specified id and returns the deleted post object

// put (/api/posts/:id) updates the post with the specified id using data from the request body. 
// Returns modified document, not the original.