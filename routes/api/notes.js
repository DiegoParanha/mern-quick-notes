const ensureLoggedIn = require("../../config/ensureLoggedIn")
const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');

// router.get('/', ensureLoggedIn, notesCtrl.index);
router.post('/', ensureLoggedIn, notesCtrl.create); 

router.get('/', ensureLoggedIn, notesCtrl.index);

module.exports = router;