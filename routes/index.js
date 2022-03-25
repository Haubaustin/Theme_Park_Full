const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('This is our project!'))

// app.router('/parks', controllers.addComment)
//
router.post('/parks', controllers.addComment)
router.get('/parks', controllers.getAllParks)
router.get('/parks/:id', controllers.getParkById)
module.exports = router;

//