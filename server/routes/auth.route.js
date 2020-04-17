const express = require('express');
const bcrypt = require('bcrypt');

const asyncHandler = require('express-async-handler');
const userConroller = require('../controllers/user.controller');

const router= express.Router();

//localhost:4050/api/auth/register
router.post('/register', asyncHandler(insert));
router.post('/login', asyncHandler(getUserByEmailIdAndPassword));

async function insert(req, res, next){
    const user = req.body;
    console.log(`registering the user`, user);
    const savedUser=await userConroller.insert(user);
    res.json(savedUser);
}

async function getUserByEmailIdAndPassword(req, res, next){
    const user = req.body;
    console.log(`searching user for`, user);
    const savedUser=await userConroller.getUserByEmailIdAndPassword(user.email, user.password);
    res.json(savedUser);
}

module.exports = router;