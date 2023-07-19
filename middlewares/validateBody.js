import helpers from "../helpers/index.js";

const validateBody = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);

    if (!req.body) {
      next(helpers.HttpError(400, "missing fields"));
    } // не працює

    if (error) {
      next(helpers.HttpError(400, error.message));
    }
    next();
  };

  return func;
};

export default validateBody;
