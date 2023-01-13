const express = require('express') // Require Express
const router = express.Router() // Routes of Express
const AuthController = require('../controllers/AuthController') // Controller of Toughts

router.get('/login', AuthController.login)
router.post('/login', AuthController.loginPost)
router.get('/register', AuthController.register)
router.post('/register', AuthController.registerPost)
router.get('/logout', AuthController.logout)

module.exports = router