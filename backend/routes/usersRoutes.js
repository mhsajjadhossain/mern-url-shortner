const express = require("express");
const { userLogin, userSignup } = require("../controllers/userControllers");
const router = express.Router();

// login route
router.post("/login", userLogin);
// signup route
router.post("/register", userSignup);
// logout route
router.post("/logout", () => {});

module.exports = router;
