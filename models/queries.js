const pool = require("./pool");

const getAllMessages = async () => {
  const { rows } = await pool.query("SELECT * FROM userDetails");
  return rows;
};

const insertUserDetails = async (userDetails) => {
  const { username, message } = userDetails;
  await pool.query("INSERT INTO userDetails (username, message) VALUES ($1, $2)", [username, message]);
};

module.exports = {
  getAllMessages,
  insertUserDetails,
};