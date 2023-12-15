const express = require('express');
const router = express.Router();
const {
    getAllResources,
    getResourceById,
    createResource,
    updateResource,
    deleteResource
} = require('../controllers/resourceManagementController');

router.get('/', getAllResources);
router.get('/:id', getResourceById);
router.post('/', createResource);
router.put('/:id', updateResource);
router.delete('/:id', deleteResource);

module.exports = router;
