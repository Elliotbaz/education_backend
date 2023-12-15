const { Teacher } = require('../data/models');

// Get all teachers
exports.getAllTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.find();
        res.json(teachers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single teacher by id
exports.getTeacherById = async (req, res) => {
    try {
        const teacher = await Teacher.findById(req.params.id);
        if (!teacher) return res.status(404).json({ message: 'Teacher not found' });
        res.json(teacher);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new teacher
exports.createTeacher = async (req, res) => {
    const teacher = new Teacher(req.body);
    try {
        const newTeacher = await teacher.save();
        res.status(201).json(newTeacher);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a teacher
exports.updateTeacher = async (req, res) => {
    try {
        const updatedTeacher = await Teacher.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTeacher) return res.status(404).json({ message: 'Teacher not found' });
        res.json(updatedTeacher);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a teacher
exports.deleteTeacher = async (req, res) => {
    try {
        const teacher = await Teacher.findByIdAndDelete(req.params.id);
        if (!teacher) return res.status(404).json({ message: 'Teacher not found' });
        res.json({ message: 'Teacher deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
