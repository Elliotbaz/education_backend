const { Coach } = require('../data/models')

// Get all coaches
exports.getAllCoaches = async (req, res) => {
    try {
        const coaches = await Coach.find();
        res.json(coaches);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single coach by id
exports.getCoachById = async (req, res) => {
    try {
        const coach = await Coach.findById(req.params.id);
        if (!coach) return res.status(404).json({ message: 'Coach not found' });
        res.json(coach);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new coach
exports.createCoach = async (req, res) => {
    const coach = new Coach(req.body);
    try {
        const newCoach = await coach.save();
        res.status(201).json(newCoach);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a coach
exports.updateCoach = async (req, res) => {
    try {
        const updatedCoach = await Coach.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCoach) return res.status(404).json({ message: 'Coach not found' });
        res.json(updatedCoach);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a coach
exports.deleteCoach = async (req, res) => {
    try {
        const coach = await Coach.findByIdAndDelete(req.params.id);
        if (!coach) return res.status(404).json({ message: 'Coach not found' });
        res.json({ message: 'Coach deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
