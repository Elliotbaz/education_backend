const { ResourceManagement } = require('../data/models');

// Get all resource management entries
exports.getAllResources = async (req, res) => {
    try {
        const resources = await ResourceManagement.find().populate('allocated_teachers');
        res.json(resources);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single resource management entry by id
exports.getResourceById = async (req, res) => {
    try {
        const resource = await ResourceManagement.findById(req.params.id).populate('allocated_teachers');
        if (!resource) return res.status(404).json({ message: 'Resource not found' });
        res.json(resource);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new resource management entry
exports.createResource = async (req, res) => {
    const resource = new ResourceManagement(req.body);
    try {
        const newResource = await resource.save();
        res.status(201).json(newResource);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a resource management entry
exports.updateResource = async (req, res) => {
    try {
        const updatedResource = await ResourceManagement.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedResource) return res.status(404).json({ message: 'Resource not found' });
        res.json(updatedResource);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a resource management entry
exports.deleteResource = async (req, res) => {
    try {
        const resource = await ResourceManagement.findByIdAndDelete(req.params.id);
        if (!resource) return res.status(404).json({ message: 'Resource not found' });
        res.json({ message: 'Resource deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
