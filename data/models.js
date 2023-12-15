const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teacherSchema = new mongoose.Schema({
    name: { type: String, required: true },
    last_active: { type: Date, required: true },
    activity_score: { type: Number, required: true },
    student_interaction_rating: { type: Number, required: true },
    subjects_taught: [{ type: String }]
});
const studentProgressSchema = new mongoose.Schema({
    subject: { type: String, required: true },
    average_score_improvement: { type: Number, required: true },
    homework_completion_rate: { type: Number, required: true },
    attendance_rate: { type: Number, required: true }
});

const resourceManagementSchema = new mongoose.Schema({
    resource_name: { type: String, required: true },
    allocated_teachers: [{ type: Schema.Types.ObjectId, ref: 'Teacher' }],
    utilization_rate: { type: Number, required: true }
});

const coachSchema = new mongoose.Schema({
    name: { type: String, required: true },
    specialization: { type: String, required: true },
    years_of_experience: { type: Number, required: true }
});

const coachTeacherInteractionSchema = new mongoose.Schema({
    coach_id: { type: Schema.Types.ObjectId, ref: 'Coach' },
    teacher_id: { type: Schema.Types.ObjectId, ref: 'Teacher' },
    last_meeting_date: { type: Date, required: true },
    meeting_notes: { type: String, required: true }
});

exports.CoachTeacherInteraction = mongoose.model('CoachTeacherInteraction', coachTeacherInteractionSchema);
exports.Coach = mongoose.model('Coach', coachSchema);
exports.ResourceManagement = mongoose.model('ResourceManagement', resourceManagementSchema);
exports.StudentProgress = mongoose.model('StudentProgress', studentProgressSchema);
exports.Teacher = mongoose.model('Teacher', teacherSchema);

