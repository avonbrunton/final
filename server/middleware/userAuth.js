const jwt = require("jsonwebtoken");
const User = require("../models/user");
module.exports.userAuth = async function (req, res, next) {
  const token = req.header("auth");
  if (token) {
    try {
      let payload = jwt.verify(token, process.env.SCREAT_KEY);
      let user = await User.findOne({ _id: payload.id });
      if (user) {
        req.user = user.toObject();
        next();
      } else {
        return res.status(401).json({ err: "something went wrong" });
      }
    } catch (e) {
      return res.status(401).json({ err: "invalid token" });
    }
  } else {
    return res.status(401).json({ err: "auth token required" });
  }
};
