// const express = require("express");
// const { User } = require("./allSchema");
// const allroutes = express.Router();
// // const multer = require("multer");
// // const upload = multer();
// // const bcrypt = require('bcrypt');

// const stripe = require('stripe')('sk_test_51OyWO6SJGEZiRddbJFJoHBmjW01s9nmVgYhNQjzrkbyNK009QZV5yE3OHNnnwe5yOHChfTXBvg2lTlNp0FHdeiU7005IyYjaA2');

// allroutes.get('/', (req, res) => {
//     console.log("Reached root");
//     res.send("Welcome to Dune LMS");
// });

// allroutes.post('/login', async (req, res) => {
//     console.log("Reached login");
//     const { username, password } = req.body;
//     console.log("Username:", username);
//     try {
//         const user = await User.findOne({ username });
//         if (!user) {
//             console.log("Invalid username");
//             return res.status(400).json({ message: 'Invalid username or password' });
//         }
//         console.log("Check password:", password, user.password);
//         // Uncomment when you're ready to use bcrypt
//         // const isMatch = await bcrypt.compare(password, user.password);
//         if (password !== user.password) {
//             console.log("Invalid password");
//             return res.status(400).json({ message: 'Invalid username or password' });
//         }
//         console.log("Login is successful");
//         return res.status(200).json({ message: 'Login successful' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server error' });
//     }
// });

// module.exports = allroutes;
