const router = require("express").Router();
const {
  createNewContact,
  deleteContact,
  getAllContacts,
  getUserDetail,
} = require("../controllers/contactCtrl");
const { generateSms } = require("../controllers/generateSmsCtrl");
const getSmsHistory = require("../controllers/msgHistory");

// phonebook apis
router.post("/add/contact", createNewContact);
router.get("/all/contacts", getAllContacts);
router.delete("/delete/contact/:_id", deleteContact);
router.get("/user/:id", getUserDetail);

// sms generating api
router.post("/send/sms", generateSms);

// fetch history
router.get("/sms/history", getSmsHistory);

module.exports = router;
