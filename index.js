const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

//routes
const teacherRoutes = require('./routes/teacherRoutes');
const studentProgressRoutes = require('./routes/studentProgressRoutes');
const resourceManagementRoutes = require('./routes/resourceManagementRoutes');
const coachDetailsRoutes = require('./routes/coachDetailsRoutes');
const coachTeacherInteractionsRoutes = require('./routes/coachTeacherInteractionsRoutes');

const app = express();
app.use(bodyParser.json());
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Use routes
app.use('/api/teachers', teacherRoutes);
app.use('/api/studentprogress', studentProgressRoutes);
app.use('/api/resources', resourceManagementRoutes);
app.use('/api/coaches', coachDetailsRoutes);
app.use('/api/interactions', coachTeacherInteractionsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));