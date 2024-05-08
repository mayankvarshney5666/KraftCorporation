const express = require('express');
const router = express.Router();
const Contact = require('../model/contactModel')

router.post('/', (req, res) => {
    const newContact = new Contact(req.body);
    newContact.save()
        .then(query => {
            res.status(200).json({ 'Contacting Details ': 'Added successfully to DB' });
        })
        .catch(err => {
            res.status(404).send('Failed to create new record');
        });
});

module.exports = router;