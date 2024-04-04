import User from '../models/Users.js';

// Controller for user registration
export const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Create a new user instance
    const user = new User({ email, password });

    // Save the user to the database
    await user.save();

    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
};

// Controller for user login
export const login = async (req, res) => {
  // Implement login logic here
};

// Controller for fetching user's home page with their posts
export const getHomePage = async (req, res) => {
  // Implement logic to fetch user's posts here
};
