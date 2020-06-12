const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

// Database
mongoose.connect('mongodb+srv://3xbun-edu:1234@test0-hqdnz.mongodb.net/edu_table_db?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

// Routes
const registerRoute = require("./routes/register.routes");

const router = require('express').Router();
router.post('/', (req, res) => {
    res.send(req.body);
});

app.use('/api/register', registerRoute)

app.use(express.static('../build'));

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});