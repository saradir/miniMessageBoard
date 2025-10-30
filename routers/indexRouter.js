const express = require('express');
const router = express.Router();
const messagesController = require("../controllers/messagesController");


router.get('/', messagesController.getAllMessages);
router.get("/new", (req, res) => {
  res.render("form");
});
router.post("/new", messagesController.insertMessage);
router.get("/messages/:id", messagesController.getMessage);




module.exports = router;