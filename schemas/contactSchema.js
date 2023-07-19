import Joi from "joi";

const contactSchema = Joi.object({
  name: Joi.string().min(2).max(100).required().messages({
    "any.required": "Missing required 'name' field",
  }),
  email: Joi.string().email({ minDomainSegments: 1 }).required().messages({
    "any.required": "Missing required 'email' field",
  }),
  phone: Joi.alternatives([Joi.string(), Joi.number()]).required().messages({
    "any.required": "Missing required 'phone' field",
  }),
});
// не змогла знайти як перевірити відсутність усього req.body

export default contactSchema;

// ====================================
// const contactSchema = Joi.object({
// name: Joi.string().alphanum().required(),
// email: Joi.string()
//   .email({
//     minDomainSegments: 2,
//     tlds: { allow: ["com", "net"] },
//   })
//   .required(),
// phone: Joi.string().alphanum().required(),
//   });
