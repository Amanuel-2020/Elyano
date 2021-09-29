const {RegisterUser, LoginUser, Logout , getUser} = require('../controllers/userController');
const {IsVerify} =require('../middleWare/protectUser');

const express = require('express');
const router = express.Router();

router.route('/register').post(RegisterUser);
router.route('/login').post(LoginUser);
router.route('/logout').post(Logout);
router.route('/me').get(IsVerify, getUser);

module.exports = router