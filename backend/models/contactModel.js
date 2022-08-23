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
      type: String,
      required: true,
      unique: true,
    },
    msg: [{ body: String, date: Date }],
    smsSent: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("contacts", contactListSchema);
