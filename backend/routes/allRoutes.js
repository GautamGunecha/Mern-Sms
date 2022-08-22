const router = require("express").Router();
const {
  createNewContact,
  deleteContact,
  getAllContacts,
} = require("../controllers/contactCtrl");

router.post("/add/contact", createNewContact);
router.get("/all/contacts", getAllContacts);
router.delete("/delete/contact/:_id", deleteContact);

module.exports = router;
