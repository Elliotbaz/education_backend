const express = require('express');
const router = express.Router();
const {
    getAllStudentProgress,
    getStudentProgressById,
    createStudentProgress,
    updateStudentProgress,
    deleteStudentProgress
} = require('../controllers/studentProgressController');

router.get('/', getAllStudentProgress);
router.get('/:id', getStudentProgressById);
router.post('/', createStudentProgress);
router.put('/:id', updateStudentProgress);
router.delete('/:id', deleteStudentProgress);

module.exports = router;
