import express from 'express';

const router = express.Router();

const users = [
    {
        name: "nuts",
        age: 'deez',
        fartbarf: "yes please"
    },
    {
        name: "nuts",
        age: 'deez',
        fartbarf: "yes please"
    },
    {
        name: "nuts",
        age: 'deez',
        fartbarf: "yes please"
    }
]

router.get('/', (req, res) => {
    console.log(users)
    res.send(users)
});
export default router;