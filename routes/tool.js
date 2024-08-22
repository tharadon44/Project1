const express = require("express");
const router = express.Router();
const { gettool, gettoolID, posttool, updatetool, deletetool } = require("../controller/toolController");
const authenticateToken  = require("../middlewares/auth"); 

router.get("/", authenticateToken, gettool);
router.get("/:id", authenticateToken, gettoolID);
router.post("/", authenticateToken, posttool);
router.put("/:id", authenticateToken, updatetool);
router.delete("/:id", authenticateToken, deletetool);

module.exports = router;