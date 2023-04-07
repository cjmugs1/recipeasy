// add creationDate (timestamp)
// add prep/cook time
// add description
// ingredients array
// steps array
// add photo field
// userID
// category tag array imported from new schema
// original language
// -------------------------------

const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  // purchaseDate: {
  //   type: Date,
  //   default: Date.now
  // },
  // products: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: 'Product'
  //   }
  // ]
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
