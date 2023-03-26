const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.Mixed,
    },
    upi_name: {
      type: String,
    },
    product: {
      type: mongoose.Schema.Types.Mixed,
    },
    amount: {
      type: Number,
    },
    transection_id: {
      type: String,
    },
    payment_type: {
      type: String,
    },
    status: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
