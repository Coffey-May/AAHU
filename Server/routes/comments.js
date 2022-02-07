import express from 'express';
import Comment from '../models/CommentModel.js';

const router = express.Router();

// const comments = [
//     {
//         name: "nuts",
//         age: 'deez',
//         fartbarf: "yes please"
//     },
//     {
//         name: "nuts",
//         age: 'deez',
//         fartbarf: "yes please"
//     },
//     {
//         name: "nuts",
//         age: 'deez',
//         fartbarf: "yes please"
//     }
// ]

router.get('/', async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments)
    } catch (error) {
        res.json({ message: err })
    }
});
router.get('/:id', async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id)
        res.send(comment)
    } catch (error) {
        res.json({ message: err })
    }
})
router.post('/', (req, res) => {
    const comment = new Comment({
        userId: req.body.userId,
        userName: req.body.userName,
        body: req.body.body,
        parentId: req.body.parentId
    })
    comment.save().then(data => {
        res.json(data);
    }).catch(err => {
        res.json({ message: err })
    })

});
router.delete('/:id', async (req, res) => {

    try {
        const deletedComment = await Comment.remove({ _id: req.params.id })
        res.json(deletedComment)
    } catch (error) {
        res.json({ message: err })
    }

});
router.patch('/:id', async (req, res) => {

    try {
        const updatedPost = await Comment.findOneAndUpdate({ _id: req.params.id }, { $set: { body: req.body.body } }
        );
        res.json(updatedPost)
    } catch (err
    ) {
        res.json({ message: err })
    }

});
export default router;