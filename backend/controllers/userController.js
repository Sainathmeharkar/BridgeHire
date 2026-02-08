const User = require('../models/User');
const bcrypt = require('bcryptjs');

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = async (req, res) => {
  try {
    // 1. Destructure data from the request body
    const { name, email, password, role } = req.body;

    // 2. Validation: Check if all fields are present
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Please add all fields' });
    }

    // 3. Check if user already exists in the DB
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // 4. Hash (Encrypt) the password
    // Salt is random data to make the password uncrackable
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 5. Create the user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: role || 'student', // Default to student
    });

    // 6. Send the response back to the frontend
    if (user) {
      res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      });
    } else {
      res.status(400).json({ message: 'Invalid user data' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const loginUser = async (req, res) => {
    try{
        const { email, password } = req.body;
        const user = await User.findOne({email});
        if(user && (await bcrypt.compare(password, user.password))){
            res.json({
                _id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
                message: "Login sucessful!"
            });
        } else{
            res.status(400).json({message:'Invalid credentials'})
        }
    }catch (error){
        res.status(500).json({message : error.message})
    }
};

module.exports = {
  registerUser,
  loginUser
};