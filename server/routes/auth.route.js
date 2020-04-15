const express = require('express');
const userConroller = require('../controllers/user.controller');
const asyncHandler = require('express-async-handler');

const router= express.Router();

//localhost:4050/api/auth/register
router.post('/register', asyncHandler(insert));

async function insert(req, res, next){
    const user = req.body;
    console.log(`registering the user`, user);
    const savedUser=await userConroller.insert(user);
    res.json(savedUser);
}

module.exports = router;