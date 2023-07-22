import express from "express";

import ctrl from "../../controlers/contacts.js";
import {
  validateBody,
  isEmptyBody,
  isValidId,
} from "../../middlewares/index.js";
import contactSchema from "../../schemas/contactSchema.js";

const contactsRouter = express.Router();

contactsRouter.get("/", ctrl.getAll);

contactsRouter.get("/:contactId", isValidId, ctrl.getByID);

contactsRouter.post(
  "/",
  isEmptyBody,
  validateBody(contactSchema.contactAddSchema),
  ctrl.add
);

contactsRouter.delete("/:contactId", isValidId, ctrl.deleteByID);

contactsRouter.put(
  "/:contactId",
  isEmptyBody,
  isValidId,
  validateBody(contactSchema.contactAddSchema),
  ctrl.updateByID
);

contactsRouter.patch(
  "/:contactId/favorite",
  isValidId,
  isEmptyBody,
  validateBody(contactSchema.contactUpdateFavoriteSchema),
  ctrl.updateFavorite
);

export default contactsRouter;
