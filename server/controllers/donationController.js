// logic to handle donations

const Donation = require("../models/Donation");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const donationController = {
  // create a new donation
  async createDonation(req, res) {
    const { amount, currency, description } = req.body;
    const userID = req.user?.id;

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency,
        description,
      });

      // save donation to database
      await Donation.create({ amount, currency, description, user: userId });

      res.status(200).json({ clientSecret: paymentIntent.client_secret });
    } catch (err) {
      res.status(500).json({ message: "Error processing the payment" });
    }
  },

  //retrieve list of donations

  async getDonations(req, res) {
    try {
      const donations = await Donation.find().populate("user", "name");
      res.status(200).json(donations);
    } catch (err) {
      res.status(500).json({ message: "Error retrieving donations." });
    }
  },
};

module.exports = donationController;
