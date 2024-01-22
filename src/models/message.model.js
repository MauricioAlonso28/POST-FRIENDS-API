import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    content: {
        type:  String,
        minlength: 1,
        trim: true,
        required: true
    },
    transmitter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    conversation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Conversation',
        required: true
    },
    notification: {
        type: Boolean,
        default: true,
    },
}, {
    timestamps: true,
})

export default mongoose.model("Message", messageSchema)