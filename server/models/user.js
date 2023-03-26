const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    phone: {
      type: String,
    },
    password: {
      type: String,
    },
    email: {
      type: String,
      allowNull: false,
    },
    address: {
      type: String,
    },
    is_admin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
