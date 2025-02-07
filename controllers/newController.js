
const { addMessage } = require("../controllers/indexController");

const newController = (req, res) => {
    res.render("new");
};
const newPostController = (req, res) => {
    const userName = req.body.name;
    const message = req.body.message;

    if (!userName || !message) {
        console.error("Missing name or message");
        return res.status(400).send("Name and message are required");
    }

    addMessage({ text: message, user: userName, added: new Date() });
    res.redirect("/");
};

module.exports = { newController, newPostController };