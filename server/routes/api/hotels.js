const express = require('express');
const router = express.Router();

// Load hotel model
const Hotel = require('../../models/Hotel');

// @route GET api/hotels/test
// @description tests hotels route
// @access Public
router.get('/test', (req, res) => res.send('hotel route testing!'));

// @route GET api/hotels
// @description Get all hotels
// @access Public
router.get('/', (req, res) => {
  Hotel.find()
    .then(hotels => res.json(hotels))
    .catch(err => res.status(404).json({ nohotelsfound: 'No hotels found' }));
});

// @route GET api/hotels/:id
// @description Get single hotel by id
// @access Public
router.get('/:id', (req, res) => {
  Hotel.findById(req.params.id)
    .then(hotel=> res.json(hotel))
    .catch(err => res.status(404).json({ nohotelfound: 'No hotel found' }));
});

// @route GET api/hotels
// @description add/save hotel
// @access Public
router.post('/', (req, res) => {
  Hotel.create(req.body)
    .then(hotel => res.json({ msg: 'Hotel added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this hotel' }));
});

// @route GET api/hotels/:id
// @description Update hotel
// @access Public
router.put('/:id', (req, res) => {
  Hotel.findByIdAndUpdate(req.params.id, req.body)
    .then(hotel => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/hotels/:id
// @description Delete hotel by id
// @access Public
router.delete('/:id', (req, res) => {
  Hotel.findByIdAndRemove(req.params.id, req.body)
    .then(hotel => res.json({ mgs: 'Hotel entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a hotel' }));
});

module.exports = router;