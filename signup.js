const express = require("express");
const router = express.Router();

const user = require("./Model/signUpModel");

router.post("/signup", (req, res) => {
  const { name, email, number, password } = req.body;

  const newUser = user({
    name: name,
    email: email,
    number: number,
    password: password,
  });

  try {
    newUser.save();
    res.send("new user signed up successfully");
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const userLogin = await user.find({ email, password });
    if (userLogin.length > 0) {
      const currentUser = {
        _id: userLogin[0]._id,
      };
      res.send(currentUser)
    }
    else{
        return res.status(400).json({message: "user login failed"})
    }
  } catch (error) {
   return res.status(505).json({message:error})
  }
});

module.exports = router;