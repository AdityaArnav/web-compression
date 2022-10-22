const mongoose = require("mongoose");

var mongoURL = "mongodb+srv://compression:compression12@cluster0.owv0aea.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;

db.on("connected", () => {
  console.log("MongoDB connection successful");
});
db.on("error", () => {
  console.log("MongoDB connection failed");
});

module.exports = mongoose;