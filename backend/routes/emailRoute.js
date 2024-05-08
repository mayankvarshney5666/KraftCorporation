const express = require('express');
const router = express.Router();
const Email = require('../model/emailModel');

router.post('/', (req, res) => {
    const newEmail = new Email(req.body);
    newEmail.save()
        .then(query => {
            res.status(200).json({ 'Email Request': 'Sent Successful' });
        })
        .catch(err => {
            res.status(404).send('Failed to send Email, Try Again');
            console.log("Error in sending email: ", err);
        });
});

module.exports = router;