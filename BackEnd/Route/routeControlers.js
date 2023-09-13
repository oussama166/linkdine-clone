const express = require("express");
const router = express.Router();

const { signup } = require("../Controlers/userControlers");

router.route("/singup").post(signup);

module.exports = router;
