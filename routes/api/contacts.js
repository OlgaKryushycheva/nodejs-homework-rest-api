import express from "express";

import ctrl from "../../controlers/contacts.js";
import { validateBody, isEmptyBody } from "../../middlewares/index.js";
import contactSchema from "../../schemas/contactSchema.js";

const contactsRouter = express.Router();

contactsRouter.get("/", ctrl.getAll);

contactsRouter.get("/:contactId", ctrl.getByID);

contactsRouter.post("/", isEmptyBody, validateBody(contactSchema), ctrl.add);

contactsRouter.delete("/:contactId", ctrl.deleteByID);

contactsRouter.put(
  "/:contactId",
  isEmptyBody,
  validateBody(contactSchema),
  ctrl.updateByID
);

export default contactsRouter;
