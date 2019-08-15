const express = require('express')
const postDb = require('./posts/postDb.js');
const userDb = require('./users/userDb.js');
const router = express.Router();
// -/api/users

// | POST   | /api/users
//| Creates a user using the information sent inside the `request body`.
router.post('/', async (req, res) => {
  try {
      const user = await userDb.insert(req.body)
      res.send(user)
  } catch {
    res.status(500).json({
      message: "Error creating the user."
    })
  }
})

// | POST   | /api/users/:id/posts
//| Creates a post for the user with the specified id using information sent inside of the `request body`.                                                                   |
router.post('/:id/posts', async (req, res) => {
  try {
      const post = await postDb.insert(req.body)
      res.send(post)
  } catch {
    res.status(500).json({
      message: "Error creating the post."
    })
  }
})

// | GET    | /api/users
//| Returns an array of all the user objects contained in the database.                                                                                                         |
router.get('/', async (req, res) => {
  try {
    const users = await userDb.get()
    res.json(users)
  } catch {
    res.status(500).json({
      message: "Error retrieving the users."
    })
  }
})

// | GET    | /api/users/:id
//| Returns the user object with the specified id.                                                                                                                              |
router.get('/:id', async (req, res) => {
  try {
    const user = await userDb.getById(req.params.id)
    res.json(user)
  } catch {
    res.status(500).json({
      message: "Error retrieving the user."
    })
  }
})

// | GET    | /api/users/:id/posts
//| Returns an array of all the post objects associated with the post with the specified id.                                                                                 |
router.get('/:id/posts', async (req, res) => {
  try {
    const posts = await userDb.getUserPosts(req.params.id)
    res.json(posts)
  } catch {
    res.status(500).json({
      message: "Error retrieving the posts."
    })
  }
})

// | DELETE | /api/users/:id
//| Removes the user with the specified id and returns the **deleted user object**. You may need to make additional calls to the database in order to satisfy this requirement. |
router.delete('/:id', async (req, res) => {
  try {
    const user = await userDb.remove(req.params.id)
    res.send("Deleted")
  } catch {
    res.status(500).json({
      message: "Error deleting the user."
    })
  }
})

// | PUT    | /api/users/:id
//| Updates the user with the specified `id` using data from the `request body`. Returns the modified document, **NOT the original**.                                           |
router.put('/:id', async (req, res) => {
  try {
    console.log(req.params.id, req.body)
    const user = await userDb.update(req.params.id, req.body)
    res.send(user)
  } catch {
    res.status(500).json({
      message: "Error editing the user."
    })
  }
})

module.exports = router
