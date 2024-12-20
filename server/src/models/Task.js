import mongoose, { model, Schema } from "mongoose";

const taskSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        dueDate: {
            type: Date,
            required: true,
        },
        priority: {
            type: String,
            enum: ['High', 'Medium', 'Low'],
            default: 'Medium',
        },
        status: {
            type: String,
            enum: ['Pending', 'Completed'],
            default: 'Pending',
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', // Assuming each task is linked to a user
            required: true,
        },
    },
    { timestamps: true }
);

export default model('Task', taskSchema);