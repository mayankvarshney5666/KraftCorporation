const express = require('express');
const router = express.Router();
const SMS = require('../model/smsModel');

router.post('/', (req, res) => {
    const newSMS = new SMS(req.body);
    newSMS.save()
        .then(query => {
            res.status(200).json({ 'SMS Request': 'Sent Successful' });
        })
        .catch(err => {
            res.status(404).send('Failed to send SMS request');
            console.log("Error in sending sms: ", err);
        });
});

module.exports = router;