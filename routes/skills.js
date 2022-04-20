
var express = require('express');
var router = express.Router();

var skillsCtrl = require('../controllers/skills');

module.exports = router;
router.get('/', skillsCtrl.index);
router.get('/:id', skillsCtrl.show)