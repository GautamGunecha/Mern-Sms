const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const asyncHandler = require("express-async-handler");
const ContactLists = require("../models/contactModel");

const client = require("twilio")(accountSid, authToken, { lazyLoading: true });

const generateSms = asyncHandler(async (req, res) => {
  try {
    const { text, receiver, id } = req.body;
    const myNumber = process.env.MY_TWILIO_NUMBER;

    if (!text || !receiver)
      return res.status(400).json({ msg: "Please provide msg details" });

    const sms = await client.messages.create({
      body: text,
      to: receiver,
      from: myNumber,
    });

    // update user db
    if (sms)
      await ContactLists.findByIdAndUpdate(id, {
        smsSent: true,
        $push: {
          messageHistory: {
            $each: [{ msg: text, date: new Date() }],
          },
        },
      });

    if (!sms) return res.status(400).json({ msg: "Sorry unable to send sms." });

    return res.status(200).json({ msg: "Sms sent to given mobile number." });
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = { generateSms };
