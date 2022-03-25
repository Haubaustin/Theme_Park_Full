const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('This is our project!'))

// app.router('/parks', controllers.addComment)
//
module.exports = router;

//