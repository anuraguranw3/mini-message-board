
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  },
  {
    text: "I am just day dreaming!",
    user: "The ONE whom the existence obey!",
    added: new Date()
  }
];

const indexController = (req, res) => {
  res.render("index", { title: "mini-message-board", messages: messages });
};

const addMessage = (message) => {
  messages.push(message);
};

module.exports = { indexController, addMessage };