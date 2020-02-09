const router = require('express').Router();

router.get('/v1', (req, res) => {
  res.status(200).json(
    {
      message: 'Hola mundo.'
    }
  )
})

module.exports = router;