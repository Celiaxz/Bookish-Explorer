const User = require("../models/User.model");
const router = require("express").Router();
const bcrypt = require("bcryptjs");

router.get("/", (req, res, next) => {
  res.render("authFolder/login");
});

module.exports = router;