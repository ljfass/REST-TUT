const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'hello world'
  })
})
router.get('/api', (req, res) => {
  res.json({
    message: 'hello api page'
  })
})

module.exports = router;