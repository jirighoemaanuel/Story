import express from 'express';
import { connectDB } from './db/connect.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

const server = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server running at port:${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

server();
