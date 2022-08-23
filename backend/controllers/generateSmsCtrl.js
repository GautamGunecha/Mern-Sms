const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const asyncHandler = require("express-async-handler");
const ContactLists = require("../models/contactModel");

const client = require("twilio")(accountSid, authToken, { lazyLoading: true });

const generateSms = asyncHandler(async (req, res) => {
  try {
    const { text, receiver, id } = req.body;
    const myNumber = process.env.MY_TWILIO_NUMBER;
    const date = new Date();

    if (!text || !receiver)
      return res.status(400).json({ msg: "Please provide msg details" });

    // await client.messages
    //   .create({
    //     body: text,
    //     to: receiver,
    //     from: myNumber,
    //   })
    //   .then((message) => message);

    // update user db

    await ContactLists.findByIdAndUpdate(id, {
      smsSent: true,
      $push: {
        messageHistory: {
          $each: [{ msg: text, date: date.toISOString() }],
        },
      },
    });

    return res.status(200).json({ msg: "Sms sent to given mobile number." });
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = { generateSms };
