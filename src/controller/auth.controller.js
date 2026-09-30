import userModel from "../model/user.model.js";
import crypto from "crypto";
import jwt from "jsonwebtoken"

export async function register(req, res) {
    const{username, email, passowrd} = req.body;

    const isAlreadyRegistered = await userModel.findOne({
        $or: [
            {username},
            {email}
        ]
    })

    if(isAlreadyRegistered) {
        res.status(409).joson({
            message: "Username already exists"
        })
    }

    const hashPassword = crypto.createHash("sha256").update(passowrd).digest("hex");

    const user = await userModel.create({
        username,
        email,
        password: hashPassword
    })
} 