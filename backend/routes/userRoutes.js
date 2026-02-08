const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController');

// The Address: POST / (which will become /api/users/)
router.post('/', registerUser);
router.post('/login', loginUser);
module.exports = router;