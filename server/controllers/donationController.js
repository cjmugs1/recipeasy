// logic to handle donations

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const donationController = {
    // create a new donation
    async createDonation(req, res) {
        const { amount, currency, description } = req.body;

        try {
            const paymentIntent = await stripe.paymentIntents.create({
                amount, currency, description,

            });

            res.status(200).json({ clientSecret: paymentIntent.client_secret });
        } catch (err) {
            res.status(500).json({ message: 'Error processing the payment' });
        }
    },

    //retrieve list of donations
}