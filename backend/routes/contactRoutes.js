let express  = require("express");
const { addContact } = require("../controllers/contactControllers");

let contactRouter = express.Router()

// add contact 
contactRouter.post("/add",addContact)

module.exports = contactRouter ;