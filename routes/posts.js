const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().limit(10);
    res.json(posts);
  } catch (err) {
    res.json({ messgae: err });
  }
});

router.post('/', (req, res) => {
  const { title, description } = req.body;
  const post = new Post({
    title,
    description
  });
  post.save((err, post) => {
    if (err) return res.json({ message: er });
    res.json(post);
  });
});

router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const post = await Post.deleteOne({
      _id: req.params.id
    });
    const posts = await Post.find().limit(10);
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const updatedPost = await Post.findByIdAndUpdate({
      _id: id
    },
      { title: 'NIKE', description: 'NIKENIKE' },
      {
        new: true
      });
      res.json(updatedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;  