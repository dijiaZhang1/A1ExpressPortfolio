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
router.get('/Services', indexController.services);

/* GET Contact page. */
router.get('/Contact_me', indexController.contact_me);


module.exports = router;
