const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messages = new Schema({
  msg: { type: String, default: "" },
  date: { type: Date, default: "" },
});

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
    messagesHistory: [messages],
    smsSent: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("contacts", contactListSchema);
