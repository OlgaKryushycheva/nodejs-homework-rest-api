import helpers from "../helpers/index.js";
import contactsOperations from "../models/contacts.js";

const getAll = async (req, res) => {
  const result = await contactsOperations.listContacts();
  res.json(result);
};

const getByID = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactsOperations.getContactById(contactId);
  if (!result) {
    throw helpers.HttpError(404, "Not found");
  }
  res.json(result);
};

const add = async (req, res) => {
  const result = await contactsOperations.addContact(req.body);
  res.status(201).json(result);
};

const deleteByID = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactsOperations.removeContact(contactId);
  if (!result) {
    throw helpers.HttpError(404, "Not found");
  }

  res.json({ message: "Contact deleted" });
};

const updateByID = async (req, res) => {
  const { contactId } = req.params;

  if (!req.body) {
    throw helpers.HttpError(400, "missing fields");
  } // не працює

  const result = await contactsOperations.updateContact(contactId, req.body);
  console.log(req.body);
  if (!result) {
    throw helpers.HttpError(404, "Not found");
  }
  res.json(result);
};

export default {
  getAll: helpers.ctrlWrapper(getAll),
  getByID: helpers.ctrlWrapper(getByID),
  add: helpers.ctrlWrapper(add),
  deleteByID: helpers.ctrlWrapper(deleteByID),
  updateByID: helpers.ctrlWrapper(updateByID),
};
