
const { Park, Ride, Comment } = require("../models/park");

const addComment = async (req, res) => {
    try {
        
        const comment = await new Comment(req.body)
        await comment.save()
        const Park = await Park.findByID(id)
        return res.status(201).json({
            comment,
        })
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}

module.exports = {
    addComment
}