const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    price: {
      type: Number,
    },
    story: {
      type: String,
    },
    image: {
      type: String,
    },
    label: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
