const express = require('express')
const router = express.Router()
const NewAccountController = require('../controllers/NewAccountController')
const LoginController = require('../controllers/LoginController')
const Hublink = require('../controllers/Hublink')
const CreateButtonController = require('../controllers/CreateButtonController')
const ProfileController = require('../controllers/ProfileController')

const authMiddleware = require('../middlewares/auth')
 
const newAccountController = new NewAccountController()
const loginController = new LoginController()
const hublink = new Hublink()
const createbuttonController = new CreateButtonController()
const profileController = new ProfileController()

router.get('/:username', hublink.inicialPage)
router.post('/new-account', newAccountController.create)
router.post('/login', loginController.auth)

router.post('/auth/new-profile', authMiddleware, profileController.createProfile)
router.post('/auth/find-profile', authMiddleware, profileController.findProfile)

router.post('/auth/createbutton', authMiddleware, createbuttonController.createButton)

module.exports = router