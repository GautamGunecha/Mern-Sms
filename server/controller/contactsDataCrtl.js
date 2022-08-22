const ContactsData = require("../models/contactsData");
const asyncHandler = require("express-async-handler");

const getAllContacts = asyncHandler(async (req, res) => {
  try {
    const contacts = await ContactsData.find();
    return res.status(200).json(contacts);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

const createNewContact = asyncHandler(async (req, res) => {
  try {
    const { firstName, lastName, phoneNumber } = req.body;

    if (!firstName || firstName.length === 0)
      return res.status(400).json({ msg: "Enter user first name." });

    if (!lastName || lastName.trim().length === 0)
      return res.status(400).json({ msg: "Enter user last name." });

    if (!phoneNumber)
      return res.status(400).json({ msg: "Enter Phone number" });

    const user = await ContactsData.findOne({ phoneNumber });
    if (user)
      return res.status(400).json({ msg: "User already in contact lists." });

    const newContact = await new ContactsData({
      firstName,
      lastName,
      phoneNumber,
    });

    await newContact.save();
    return res.status(200).json(newContact);
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = { getAllContacts, createNewContact };
