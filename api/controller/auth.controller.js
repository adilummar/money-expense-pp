import User from '../user/user.model.js'
import bcrypt from 'bcrypt'

export const signup = async (req,res)=>{
    const {username,email,password} = req.body
    const hashedpassword = bcrypt.hashSync(password,10)
    const newUser = new User({username,email,password:hashedpassword})
    try {
        await newUser.save()
        res.status(201).json("user saved succesfuly")
    } catch (error) {
        res.status(500).json(error.message)
    }
}



