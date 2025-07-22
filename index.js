const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const Chat = require('./models/chat.js');

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

main().then(err =>{console.log("Connected to MongoDB")})

.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


// index route
app.get("/chats", async (req, res) => {
  try {
    const chats = await Chat.find();
    console.log(chats);
    res.render("index.ejs",{ chats }); // Render the index view with chats data
    // If you want to render the chats in a view, you can uncomment the line below
    // res.render("chat", { chats });
  } catch (error) {
    console.error("Error fetching chats:", error);
    res.status(500).send("Internal Server Error");
  }
});
// New Route
app.get("/chats/new", (req,res)=>{
  res.render("new.ejs");
})

app.get("/",(req,res) => {
  res.send("working");
});
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});























// let chat1 = new chat({
//   from: "Alice",
//   to: "Bob",
//   message: "Hello Bob!",
//   createdAt: new Date()
// });
// chat1.save()
//   .then((res) => console.log(res))