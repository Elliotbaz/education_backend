const express = require('express');
const router = express.Router();
const {
    getAllInteractions,
    getInteractionById,
    createInteraction,
    updateInteraction,
    deleteInteraction
} = require('../controllers/coachTeacherInteractionsController');

router.get('/', getAllInteractions);
router.get('/:id', getInteractionById);
router.post('/', createInteraction);
router.put('/:id', updateInteraction);
router.delete('/:id', deleteInteraction);

module.exports = router;
