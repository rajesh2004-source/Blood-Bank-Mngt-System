const express = require("express");
const authMiddelware = require("../middlewares/authMiddelware");
const {
    bloodGroupDetailsContoller,
} = require("../controllers/analysticsController");

const router = express.Router();

//routes

//GET BLOOD DATA
router.get("/bloodGroups-data", authMiddelware, bloodGroupDetailsContoller);

module.exports = router;