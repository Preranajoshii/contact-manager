//const asyncHandler = require("express-async_handler")

const Contact = require("../models/contactModel")


//@desc get all contacts
//@route GEt api/contacts
//@access public

const getContact = async (req, res) => {
    const contacts = await Contact.find()
    res.status(200).json(contacts)
}



//@desc create new contact
//@route GEt api/contacts
//@access public


const createContact = async (req, res) => {
    try {
      console.log("The request body is:", req.body);
      const { name, email, phone } = req.body;
  
      if (!name || !email || !phone) {
        res.status(400).json({ error: "All fields are mandatory!" });
        return;
      }
  
      const contact = await Contact.create({
        name,
        email,
        phone,
      });
  
      res.status(201).json(contact);
    } catch (error) {
      console.error("Error creating contact:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
 // module.exports = { createContact };
  
//get contact for id 

const getContactForId = async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("contact not found")
    }
    res.status(200).json(contact)
}



//Update contact
const updateContact = async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("contact not found")
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true}
    )
    res.status(200).json(updatedContact)
}

const deleteContact = async (req, res) => {
    try {
      const contact = await Contact.findById(req.params.id);
  
      if (!contact) {
        res.status(404).json({ error: "Contact not found" });
        return;
      }
  
      await Contact.deleteOne({ _id: req.params.id });
  
      res.status(200).json({ message: "Contact deleted successfully" });
    } catch (error) {
      console.error("Error deleting contact:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };


module.exports = { getContact, createContact, getContactForId, updateContact, deleteContact }