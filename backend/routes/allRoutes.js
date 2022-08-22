const router = require("express").Router();
const {
  createNewContact,
  deleteContact,
  getAllContacts,
} = require("../controllers/contactCtrl");
const { generateSms } = require("../controllers/generateSmsCtrl");

// phonebook apis
router.post("/add/contact", createNewContact);
router.get("/all/contacts", getAllContacts);
router.delete("/delete/contact/:_id", deleteContact);

// sms generating api
router.post("/send/sms", generateSms);

module.exports = router;
