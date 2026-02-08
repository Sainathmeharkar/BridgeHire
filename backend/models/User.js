const mongoose = require('mongoose');

// This is the "Blueprint"
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'], // If missing, show this error
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true, // No duplicate emails allowed
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
    role: {
      type: String, 
      enum: ['student', 'recruiter'], // ONLY these 2 values are allowed
      default: 'student',
    },
  },
  {
    timestamps: true, // Automatically adds 'createdAt' and 'updatedAt'
  }
);

module.exports = mongoose.model('User', userSchema);