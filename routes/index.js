let express = require('express');
let router = express.Router();
let indexController = require('../controllers/index')

/* GET home page. */
router.get('/', indexController.home);

/* GET projects page. */
router.get('/projects', indexController.projects);

/* GET about page. */
router.get('/About', indexController.about);

/* GET services page. */
router.get('/Services', indexController.service);

/* GET Contact page. */
router.get('/Contact', indexController.contact);


module.exports = router;
