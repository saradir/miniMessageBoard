const express = require('express');
const router = express.Router();
const messagesController = require("../controllers/messagesController");
const { validateMessage } = require("../validators/messageValidator.js");


router.get('/', messagesController.getAllMessages);
router.get("/new", messagesController.newMessageGet);
router.post("/new", validateMessage, messagesController.insertMessage);
router.get("/messages/:id", messagesController.getMessage);




module.exports = router;