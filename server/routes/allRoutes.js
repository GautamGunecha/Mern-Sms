const router = require("express").Router();
const {
  createNewContact,
  getAllContacts,
} = require("../controller/contactsDataCrtl");

router.get("/all/contacts", getAllContacts);
router.post("/new/contact", createNewContact);

module.exports = router;
