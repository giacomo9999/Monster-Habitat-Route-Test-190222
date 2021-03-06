const express = require("express");
const router = express.Router();
const monster_controller = require("../controllers/monster.controller");

router.get("/test", monster_controller.test);
router.post("/create", monster_controller.monster_create);
router.get("/:id", monster_controller.monster_details);
router.put("/:id/update", monster_controller.monster_update);
router.delete("/:id/delete", monster_controller.monster_delete);

module.exports = router;
