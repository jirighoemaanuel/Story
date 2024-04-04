import express from 'express';
import { connectDB } from './db/connect.js';
import dotenv from 'dotenv';
dotenv.config();
import users from './routes/user.js';
import passport from 'passport';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use('/', users);

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
