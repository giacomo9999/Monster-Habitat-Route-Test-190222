const express = require("express");
const router = express.Router();
const monster_controller = require("../controllers/monster.controller");

router.get("/test", monster_controller.test);
router.post("/create", monster_controller.monster_create);
router.get("/:id",monster_controller.monster_details)


module.exports = router;
