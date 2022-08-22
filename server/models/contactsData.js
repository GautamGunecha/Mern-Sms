const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactsSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: 3,
    },
    lastName: {
      type: String,
      required: true,
      minLength: 3,
    },
    phoneNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    smsSent: {
      type: Boolean,
      default: false,
    },
    smsText: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("contacts", contactsSchema);
