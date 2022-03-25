const { Park, Ride, Comment } = require("../models");

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

const getAllParks = async (req, res) => {
    try {
        const parks = await Park.find({})
        return res.status(200).json({ parks })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getParkById = async (req, res) => {
    try {
        const {id} = req.params;
        const parks = await Park.findById(id)
        if (parks) {
            return res.status(200).json({ parks });
        }
        return res.status(404).send('Park with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getAllRides = async (req, res) => {
    try {
        const rides = await Ride.find({})
        return res.status(200).json({ rides })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getRideById = async (req, res) => {
    try {
        const {id} = req.params;
        const parks = await Ride.findById(id)
        if (parks) {
            return res.status(200).json({ rides });
        }
        return res.status(404).send('Ride with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


module.exports = {
    addComment,
    getParkById,
    getAllParks,
    getRideById,
    getAllRides
}