const { Router } = require('express');
const Author = require('../models/Author');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const authorDetail = await Author.getById(req.params.id);
    res.json(authorDetail);
  })

  .get('/', async (req, res) => {
    const authors = await Author.getAll();
    res.json(authors);
  });

