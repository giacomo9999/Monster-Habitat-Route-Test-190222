const express = require("express");
const router = express.Router();
const monster_controller = require("../controllers/monster.controller");

router.get("/test", monster_controller.test);

module.exports = router;
