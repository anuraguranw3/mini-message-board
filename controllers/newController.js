const { insertUserDetails } = require("../models/queries");

const newController = (req, res) => {
    res.render("new");
};

const newPostController = (req, res) => {
    const userName = req.body.name;
    const message = req.body.message;

    insertUserDetails({ username: userName, message: message });
    res.redirect("/");
};

module.exports = { newController, newPostController };