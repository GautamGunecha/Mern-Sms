const ContactLists = require("../models/contactModel");
const asyncHandler = require("express-async-handler");

const getSmsHistory = asyncHandler(async (req, res) => {
  try {
    // const data = await ContactLists.find({ smsSent: true });

    const data = await ContactLists.aggregate([
      {
        $match: { smsSent: true },
      },
      {
        $project: {
          firstName: 1,
          lastName: 1,
          contactNumber: 1,
          messageHistory: { $reverseArray: "$messageHistory" },
        },
      },
    ]);

    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = getSmsHistory;
