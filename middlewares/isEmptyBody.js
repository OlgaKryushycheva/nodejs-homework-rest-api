import helpers from "../helpers/index.js";

const isEmptyBody = (req, res, next) => {
  const { length } = Object.keys(req.body);
  if (!length) {
    next(helpers.HttpError(400, "Missing fields"));
  }
  next();
};

export default isEmptyBody;
