const express = require('express');     /*import the packeges*/
const mongoose = require('mongoose');
const app = express();
app.use(express.json());  /*convert row data into json (send data to the database) */
const port = 3000;             /* port number*/

const SignupModel = require("./models/Signup.js");
const AuctionModel2 = require("./models/Auction.js");
const SigninModel = require("./models/Signin.js");


app.get('/sayhello', (req, res) => {
  res.send('Hello World to evining class');
});

app.post("/signup", async (req, res) => {
  try {
    const Signup = await SignupModel.create(req.body);
    res.status(200).json(Signup);
    console.log(req.body);
  } catch (error) {
    res.sendStatus(500);
  }
});
app.post("/postauction", async (req, res) => {
  try {
    const Auction1 = await AuctionModel2.create(req.body);
    res.status(200).json(Auction1);
    console.log(req.body);
  } catch (error) {
    res.sendStatus(500);
  }
});
app.post("/signin", async (req, res) => {
  try {
    const Signin = await SigninModel.create(req.body);
    res.status(200).json(Signin);
    console.log(req.body);
  } catch (error) {
    res.sendStatus(500);
  }
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

mongoose
  .connect("mongodb+srv://Vicky:Vikas18@p2auction.dppyrrg.mongodb.net/")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("MongoDB Not Connected ");
  });