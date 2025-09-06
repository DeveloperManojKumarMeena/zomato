const express = require('express');
const {registerUser,Login,logoutUser } = require('../controllers/auth.controller');
const { registerPartner , LoginPartner } = require('../controllers/partnerAuth.controller');

const router = express.Router();


//user auth api
   
router.post('/user/register', registerUser)

router.post('/user/login', Login)

router.get('/user/logout',logoutUser)

//food partner auth api

router.post('/partner/register',registerPartner)

router.post('/partner/login',LoginPartner)


module.exports = router;