import { Mongoose } from "mongoose";
import { Schema } from "mongoose";

const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    date: {
        type: Date,
        default: Date.now
    }
});
