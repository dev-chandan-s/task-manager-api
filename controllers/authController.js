const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
    
    try{

        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({
                message: "Email and Password required"
            });
        }

        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(400).json({
                message: "User already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            email,
            password: hashedPassword
        });

        await user.save();

        res.status(201).json({
            message: "User Created successfully"
        });

    }catch(error){
        console.log(error);

        res.status(500).json({
            message: "Server Error"
        });

    }

};

const login = async (req, res) => {

    try{

        const { email, password } = req.body;

        const user = await User.findOne({email});

        if(!user){
            return res.status(404).json({
                message: "User Not Found"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(401).json({
                message: "Invalid Password"
            });
        }

        const token = jwt.sign(
            {
                id: user._id,
                email: user.email
            },
            process.env.JWT_SECRET
        );

        res.status(200).json({
            token
        })
    }catch(error){
        console.log(error);

        res.status(500).json({
            message: "Server Error"
        });
    }
};

module.exports = {
    signup,
    login
};
