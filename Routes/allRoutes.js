const express = require('express');
const routes = express.Router();
const fetchData = require('../utils/utils');
const apiBooks = 'https://api-books-ac3j.onrender.com/books';
const apiUsers = 'https://api-books-ac3j.onrender.com/users';

routes.get('/books', async (req, res) => {
    try {
        const data = await fetchData(apiBooks);
        res.json(data);
    }catch {
        res.status(500).json({ error: ' Error no pudimos cargar los datos'})
    }
});

routes.get('/users', async (req, res) => {
    try {
        const data = await fetchData(apiUsers);
        res.json(data);
    } catch {
         res.status(500).json({ error: ' Error no pudimos cargar los datos'})
    }
});

module.exports = routes;


