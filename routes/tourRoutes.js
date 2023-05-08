const express = require('express');
const tourController = require('./../controllers/tourController');


const router = express.Router();

router.param('id',tourController.checkId);

router.route('/').get(tourController.getTours).post(tourController.checkBody,tourController.createTour); // chaining middleware first checkBody will run and then createTour will run
router.route('/:id').patch(tourController.updateTour).delete(tourController.deleteTour).get(tourController.getTour);

module.exports = router;