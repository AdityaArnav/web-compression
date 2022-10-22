const mongoose = require("mongoose");

const SignUpSchema = mongoose.Schema(
  {
    name: { type: "String", required: true },
    email: { type: "String", required: true },
    // picture:{type:media}
    number: { type: "Number", required: true },
    password: { type: "String", required: true },
  },
  {
    timestamps: true,
  }
);

const SignUpModel = mongoose.model("userSignUp", SignUpSchema);

module.exports = SignUpModel;