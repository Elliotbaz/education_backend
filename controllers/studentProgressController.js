const { StudentProgress } = require('../data/models');

// Get all student progress records
exports.getAllStudentProgress = async (req, res) => {
    try {
        const studentProgress = await StudentProgress.find();
        res.json(studentProgress);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single student progress record by id
exports.getStudentProgressById = async (req, res) => {
    try {
        const progress = await StudentProgress.findById(req.params.id);
        if (!progress) return res.status(404).json({ message: 'Student progress not found' });
        res.json(progress);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new student progress record
exports.createStudentProgress = async (req, res) => {
    const progress = new StudentProgress(req.body);
    try {
        const newProgress = await progress.save();
        res.status(201).json(newProgress);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a student progress record
exports.updateStudentProgress = async (req, res) => {
    try {
        const updatedProgress = await StudentProgress.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProgress) return res.status(404).json({ message: 'Student progress not found' });
        res.json(updatedProgress);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a student progress record
exports.deleteStudentProgress = async (req, res) => {
    try {
        const progress = await StudentProgress.findByIdAndDelete(req.params.id);
        if (!progress) return res.status(404).json({ message: 'Student progress not found' });
        res.json({ message: 'Student progress deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
