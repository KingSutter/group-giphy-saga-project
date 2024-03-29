const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {

  // SQL Query to return all favorites
  const query = 'SELECT * FROM favorites;';

  pool.query(query)
    .then((response) => {
      // console.log('SELECT ALL favorites response', response);
      res.send(response.rows)
    })
    .catch((error) => {
      console.log('SELECT ALL favorites error', error);
      res.sendStatus(500);
    })
});

// add a new favorite 
router.post('/', (req, res) => {
  const newFav = req.body;
  // SQL Query to add a new favorite to table
  const query = '';

  const queryValues = [
    newFav.title,
    newFav.url,
  ];

  pool.query(query, queryValues)
    .then((response) => {
      // console.log('POST new favorite response', respons);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('POST new favorite error', error);
      res.sendStatus(500);
    })
});

// update given favorite with a category id
router.put('/:favId/:catId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image

  // SQL Query to modify the catergories table with $1 = favID
  const query = `
  UPDATE "favorites"
  SET "category_id" = '${req.params.catId}'
  WHERE "id" = '${req.params.favId}';`;

  pool.query(query)
    .then((response) => {
      // console.log('favorites category PUT response', response);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('favorites category PUT error', error);
      res.sendStatus(500);
    })
});

// delete a favorite
router.delete('/:id', (req, res) => {
  // SQL Query to delete a favorite by id where $1=id
  const query = '';

  pool.query(query, req.params.id)
    .then((response) => {
      // console.log('favorites DELETE response', response);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('favorites DELETE error', error);
      res.sendStatus(500);
    })
});

module.exports = router;
