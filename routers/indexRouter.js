const express = require('express');
const router = express.Router();


const messages = [
  {
    id: 1,
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    id: 2,
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

let nextId = 3;

router.get('/', (req, res) => {
    res.render('index', {title: "Mini Message Board", messages: messages});
});

router.get("/new", (req, res) => {
  res.render("form");
});

router.post("/new", (req, res) => {
  messages.push({ id: nextId, text: req.body.messageText, user: req.body.author, added: new Date()});
  res.redirect("/");
  nextId ++;
});

router.get("/messages/:id", (req,res) => {
  const msg = messages.find(m => 
    m.id === Number(req.params.id));
  console.log(msg);
  if (!msg)  console.log("404");
  res.render("message", {message: msg} );
  });




module.exports = router;