const router = require('express').Router();
const {sendMessage} = require('../controllers/Contact_Controller')

router.route('/sendmessage').post(sendMessage)

module.exports = router
