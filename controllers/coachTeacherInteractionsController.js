const { CoachTeacherInteraction } = require('../data/models');

// Get all interactions
exports.getAllInteractions = async (req, res) => {
    try {
        const interactions = await CoachTeacherInteraction.find().populate('coach_id').populate('teacher_id');
        res.json(interactions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single interaction by id
exports.getInteractionById = async (req, res) => {
    try {
        const interaction = await CoachTeacherInteraction.findById(req.params.id).populate('coach_id').populate('teacher_id');
        if (!interaction) return res.status(404).json({ message: 'Interaction not found' });
        res.json(interaction);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new interaction
exports.createInteraction = async (req, res) => {
    const interaction = new CoachTeacherInteraction(req.body);
    try {
        const newInteraction = await interaction.save();
        res.status(201).json(newInteraction);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update an interaction
exports.updateInteraction = async (req, res) => {
    try {
        const updatedInteraction = await CoachTeacherInteraction.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedInteraction) return res.status(404).json({ message: 'Interaction not found' });
        res.json(updatedInteraction);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete an interaction
exports.deleteInteraction = async (req, res) => {
    try {
        const interaction = await CoachTeacherInteraction.findByIdAndDelete(req.params.id);
        if (!interaction) return res.status(404).json({ message: 'Interaction not found' });
        res.json({ message: 'Interaction deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
