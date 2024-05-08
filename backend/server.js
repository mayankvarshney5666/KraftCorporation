const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const env = require('dotenv');
const mongoose = require('mongoose');
const queryRoute = require('./routes/queryRoute')
const contactRoute = require('./routes/contactRoute')
const smsRoute = require('./routes/smsRoute')
const emailRoute = require('./routes/emailRoute')

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// MongoDB Ka Connection
mongoose.connect('mongodb://127.0.0.1:27017/KraftCorporation', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('Error', err));


// Routes
app.use('/inquiries', queryRoute);
app.use('/contactus', contactRoute);
app.use('/send-sms', smsRoute)
app.use('/send-email', emailRoute)
app.get('/', (req, res) => {
    res.send("Hello, I'm a Server")
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

