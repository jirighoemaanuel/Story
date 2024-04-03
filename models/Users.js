import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'must provide a title'],
  },
  post: {
    type: String,
    required: [true, 'must provide a post'],
  },
  slug: {
    type: String,
    required: [false],
  },
});

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'must provide a email'],
  },
  password: {
    type: String,
    required: [true, 'must provide a password'],
  },
  posts: [PostSchema],
});

export default mongoose.model('User', UserSchema);
