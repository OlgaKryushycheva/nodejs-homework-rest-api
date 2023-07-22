import Contact from "../models/contact.js";
import helpers from "../helpers/index.js";

const getAll = async (req, res) => {
  const result = await Contact.find();
  res.json(result);
};

const getByID = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);
  if (!result) {
    throw helpers.HttpError(404, "Not found");
  }
  res.json(result);
};

const add = async (req, res) => {
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};

const deleteByID = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndDelete(contactId);
  if (!result) {
    throw helpers.HttpError(404, "Not found");
  }

  res.json({ message: "Contact deleted" });
};

const updateByID = async (req, res) => {
  const { contactId } = req.params;

  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  console.log(req.body);
  if (!result) {
    throw helpers.HttpError(404, "Not found");
  }
  res.json(result);
};

const updateFavorite = async (req, res) => {
  const { contactId } = req.params;

  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
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
  updateFavorite: helpers.ctrlWrapper(updateFavorite),
};
