const db = require("../db/queries");


async function getAllMessages(req, res) {
    const messages = await db.getAllMessages();
    console.log(messages);
    if(!messages){
      console.log("404");
    }
    res.render('index', {title: "Mini Message Board", messages: messages});
}

async function getMessage(req,res) {
  const msg = await  db.getMessage(Number(req.params.id));
  if (!msg)  console.log("404");
  res.render("message", {message: msg} );
  }

  async function insertMessage(req, res) {
    await db.insertMessage(req.body.author, req.body.messageText);
    res.redirect("/");
  }

module.exports = {
    getAllMessages,
    getMessage,
    insertMessage,
};


