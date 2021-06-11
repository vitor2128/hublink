const express = require('express')
const router = express.Router()
const UsersController = require('../controllers/UsersController')
const LoginController = require('../controllers/LoginController')
const Hublink = require('../controllers/Hublink')
const LinkController = require('../controllers/LinkController')

const authMiddleware = require('../middlewares/auth')
 
const usersController = new UsersController()
const loginController = new LoginController()
const hublink = new Hublink()
const linkController = new LinkController()

router.get('/:username', hublink.inicialPage)
router.post('/auth/new-account', usersController.create)
router.post('/auth/login', loginController.auth)
router.post('/auth/createbutton',authMiddleware, linkController.createButton)

module.exports = router