import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    message: {
        type: String,
        maxlength: 500,
        minlength: 10,
        trim: true,
        required: true
    },
    image: {
        type: String,
        default: null
    },
    video: {
        type: String,
        default: null
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
}, {
    timestamps: true,
})

export default mongoose.model("Post", postSchema)