const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://admin_syed:syed_123456@cluster0.fpyu9ri.mongodb.net/test');

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("MongoDB is connected");
});

connection.on("error", (err) => {
  console.log(err);
});

module.exports = connection;
