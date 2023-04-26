import { Schema, model } from "mongoose";
import bcrypt from "bcrypt"
import User from "@/resources/user/user.interface"

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true,
        trim: true
    },
    password: {
        type: String,
    },
    role: {
        type: String,
        require: true
    }

}, {
    timestamps: true
})

export default  model<User> ("User" , UserSchema)