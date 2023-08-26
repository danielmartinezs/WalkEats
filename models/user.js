import { model, models, Schema } from "mongoose";

const userSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists'],
        required: [true, 'Email is required'],
    },
    password: {
        type: String,
        required : [true, "Password is required"],
        select: false,
    },
    username: {
        type: String,
        required: [true, 'Username is required']
    },
    type: {
        type: Number,
        required: [true, 'Type needs to be specified']
    }
});

const User = models.User || model("User", userSchema);

export default User;