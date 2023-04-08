// route to handle donations

const express = require('express'); 
const router = express.Router();
const donationController = require('../controller/donationController')

// donation route - /api/donations
router.get('/', donationController.getDonations);
router.post('/', donationController.createDonation); 

module.exports = router;