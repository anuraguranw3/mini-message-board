const db = require("../models/queries");

const getMessages = async (req, res) => {
  const messages = await db.getAllMessages();
  res.render("index", { messages: messages });
};

module.exports = { getMessages };