const router = require("express").Router();
const { Post } = require("../../models");
const { apiAuth } = require("../../utils/auth")

// Get all posts
router.get("/:id", async (req, res) => {

    try {
      const postData = await Post.findAll({
        where: {
          id: req.params.id,
        },
        include: [{ all: true, nested: true }],
      });

      if (!postData) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
      }
      res.status(200).json(postData);

    } catch (err) {
      res.status(500).json(err);
    }
});

// Get all posts
router.get("/", async (req, res) => {

  try {
    const posts = await Post.findAll({
      include: [{ all: true, nested: true }],
    });
    res.status(200).json(posts);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});

// create a new post
router.post("/", apiAuth , async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update a post
//http;//localhost:3001/api/posts/1
router.put("/:id", apiAuth, async (req, res) => {
  try {

    const updatedPost = await Post.update({
      ...req.body,
      user_id: req.session.user_id,
    }, {
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      }
    });

    res.status(200).json(updatedPost);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }

});



// delete a post
router.delete("/:id", apiAuth, async (req, res) => {
  try {
    const delData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    if (!delData) {
      res.status(404).json({ message: 'No goal found with this id!' });
      return;
    }
    res.status(200).json(delData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;