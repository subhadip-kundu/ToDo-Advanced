const router = require("express").Router();
const User = require("../Models/userModel.js");


// SIGN IN

router.post("/register", async (req, res) => {
    try {
        const { email, username, password } = req.body;
        const user = new User({ email, username, password });
        await user.save();
    } catch (error) {

    }
})