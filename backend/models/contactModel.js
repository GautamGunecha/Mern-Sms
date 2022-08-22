const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactListSchema = new Schema(
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
    contactNumber: {
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
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("contacts", contactListSchema);
