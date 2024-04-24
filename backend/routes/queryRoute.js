const express = require('express');
const router = express.Router();
const Query = require('../model/queryModel');

router.post('/', (req, res) => {
    const newQuery = new Query(req.body);
    newQuery.save()
        .then(query => {
            res.status(200).json({ 'inquiry': 'Added successfully' });
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});

module.exports = router;