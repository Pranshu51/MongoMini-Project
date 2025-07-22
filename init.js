const mongoose = require('mongoose');

// Define the Chat schema and model
const chatSchema = new mongoose.Schema({
  from: String,
  to: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Chat = mongoose.model('Chat', chatSchema); // ✅ Define Chat model

// Connect to MongoDB
main().then(() => {
  console.log("Connected to MongoDB");

  // Insert data after connection
  return Chat.insertMany(allChat);
})
.then(() => {
  console.log("Chats inserted successfully");
  mongoose.connection.close(); // Optional: close connection after insert
})
.catch(err => {
  console.log(err);
});

// Database connection function
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
// localhost:27017/whatsapp

// Chat data
let allChat = [
  {
    from: "Alice",
    to: "Bob",
    message: "Hello Bob!",
    createdAt: new Date()
  },
  {
    from: "king",
    to: "neha",
    message: "Hi neha! How are you?",
    createdAt: new Date()
  },
  {
    from: "Alice",
    to: "parul",
    message: "I'm good, thanks! And you?",
    createdAt: new Date()
  },
  {
    from: "rohit",
    to: "Alice",
    message: "Doing well, just busy with work.",
    createdAt: new Date()
  }
];
