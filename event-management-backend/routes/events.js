var express = require("express");
var router = express.Router();
var usersController = require("../controllers/events");

router.get("/", usersController.getUsers);
router.post("/", usersController.createUser);



module.exports = router;
