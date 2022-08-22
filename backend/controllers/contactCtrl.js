const ContactLists = require("../models/contactModel");
const asyncHandler = require("express-async-handler");

const createNewContact = asyncHandler(async (req, res) => {
  try {
    const { firstName, lastName, contactNumber } = req.body;
    if (!firstName || firstName.trim().length === 0)
      return res.status(400).json({ msg: "Please provide first name." });

    if (!lastName || lastName.trim().length === 0)
      return res.status(400).json({ msg: "Please provide last name." });

    if (!contactNumber)
      return res.status(400).json({ msg: "Please provide contact number." });

    const isValid = validatePhoneNumber(contactNumber);
    if (!isValid)
      return res
        .status(400)
        .json({ msg: "Please provide valid contact number." });

    const user = await ContactLists.findOne({ contactNumber });
    if (user)
      return res
        .status(400)
        .json({ msg: "Contact number assigned to another user." });

    const newUser = new ContactLists({
      firstName,
      lastName,
      contactNumber,
    });

    await newUser.save();
    return res.status(200).json({ msg: "Contact details saved." });
  } catch (error) {
    return res.status(400).json({ msg: error });
  }
});

const getAllContacts = asyncHandler(async (req, res) => {
  try {
    const contactLists = await ContactLists.find();
    return res.status(200).json(contactLists);
  } catch (error) {
    return res.status(400).json({ msg: error });
  }
});

const deleteContact = asyncHandler(async (req, res) => {
  try {
    await ContactLists.findByIdAndDelete(req.params._id);

    const updatedLists = await ContactLists.find();
    return res.status(200).json(updatedLists);
  } catch (error) {
    return res.status(400).json({ msg: error });
  }
});

const validatePhoneNumber = (contactNumber) => {
  const regex = /^\+91\d{10}$/;
  if (contactNumber.match(regex)) return true;
  return false;
};

module.exports = { createNewContact, getAllContacts, deleteContact };
