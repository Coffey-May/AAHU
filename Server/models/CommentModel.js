import mongoose from 'mongoose';

const commentSchema = mongoose.Schema({
    userId: { type: String, required: true },

    userName: { type: String, required: true },

    body: { type: String, required: true },

    parentId: { type: String || null, required: true },

    createdAt: {
        type: Date, default: new Date(),
    },
})

var Comment = mongoose.model('Comment', commentSchema);

export default Comment;

