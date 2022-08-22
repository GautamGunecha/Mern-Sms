const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const asyncHandler = require("express-async-handler");

const client = require("twilio")(accountSid, authToken, { lazyLoading: true });

const generateSms = asyncHandler(async (req, res) => {
  try {
    const { text, receiver } = req.body;
    const myNumber = process.env.MY_TWILIO_NUMBER;

    if (!text || !receiver)
      return res.status(400).json({ msg: "Please provide msg details" });

    await client.messages
      .create({
        body: text,
        to: receiver,
        from: myNumber,
      })
      .then((message) => message);

    return res.status(200).json({ msg: "Sms sent to registered mobile num." });
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = { generateSms };
