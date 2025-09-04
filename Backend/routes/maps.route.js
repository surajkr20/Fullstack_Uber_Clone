const express = require('express');
const router = express.Router();
const authMiddleware = require("../middleware/auth.middleware");
const { getCoordinates } = require("../controllers/maps.controller");

router.get("/get-coordinate", authMiddleware.authUser, (req, res) =>{

})

module.exports = router;