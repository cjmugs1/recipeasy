// route to handle donations
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const express = require('express'); 
const router = express.Router();

// donation route

router.post('/donate', async (req, res) => {
    try {
        // donation controller
        const donationResult = await processDonation(req.body);
        res.status(200).json(donationResult);
    } catch (err) {
        res.status(500).json({ message: 'Error processing donation.', error: error.message });
    }
});

module.exports = router;