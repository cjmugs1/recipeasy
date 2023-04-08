// model for stripe donations

const { Schema, model } = require('mongoose');

const donationSchema = new Schema({
    amount:  {
        type: Number,
        required: true,
    },
    currency: {
        type: String,
        required: true,
    },
    description: String,
    createdAt: { Date,
    default: Date.now,
},
user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
},
});

const Donation = model('Donation' = model('Donation'), donationSchema);

module.exports = Donation;