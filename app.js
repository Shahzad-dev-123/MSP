const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*' }
});

app.use(cors());
app.use(express.json());

// MongoDB setup
// mongoose.connect(process.env.MONGO_URI || 'your-mongodb-uri', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const Message = mongoose.model('Message', {
//   text: String,
//   sender: String,
//   timestamp: { type: Date, default: Date.now },
// });

// On client connection
io.on('connection', socket => {
  console.log('Client connected');

  socket.on('chat-message', async (data) => {
    // const msg = new Message(data);
    // await msg.save();
    io.emit('chat-message', "all messages"); // Broadcast to all
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

// Optional: API to get all previous messages
app.get('/messages', async (req, res) => {
  //const messages = await Message.find().sort({ timestamp: 1 });
 // res.json(messages);
  res.end("messages");
});

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
