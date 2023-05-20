require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const collectorRoutes = require('./routes/collectorRoutes');
const workAssignmentsController = require('./routes/workAssignmentRoutes');
const clientRoutes = require('./routes/clientRoutes');

const app = express();
<<<<<<< HEAD
require("dotenv").config();

const PORT = process.env.PORT || 8070;
=======
>>>>>>> 9382b1ff5a7f387dd21cd991b2bbada5ed642dd0

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

<<<<<<< HEAD
mongoose.connect(URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true
=======
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB');
>>>>>>> 9382b1ff5a7f387dd21cd991b2bbada5ed642dd0
});

app.use('/api', collectorRoutes);
app.use('/api', workAssignmentsController);
app.use('/api', clientRoutes);

<<<<<<< HEAD
const complaintRouter = require('./routes/complaints')

app.use('/complaint',complaintRouter)

const volunteerRouter = require('./routes/volunteers')

app.use('/volunteer',volunteerRouter)

const userRouter = require('./routes/users')

app.use('/user', userRouter)

app.listen(PORT, () => {
	console.log(`Server is up and running on Port: ${PORT}`)
})
=======
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
>>>>>>> 9382b1ff5a7f387dd21cd991b2bbada5ed642dd0
