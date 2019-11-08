require('dotenv').config();
const axios = require('axios');
const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.post('/', (req, res) => {

    const searchQuery = req.body;

    const path = 'https://api.giphy.com/v1/gifs/search'

    const params = {
        api_key: process.env.GIPHY_API_KEY,
        q: searchQuery,
        limit: '24',
        rating: 'G',
    };

    axios.get(path, {params})
        .then((response) => {
            console.log('giphy GET response', response);
            res.send(response.data)
        })
        .catch((error) => {
            console.log('giphy GET error', error);
            
        })
});

module.exports = router;
