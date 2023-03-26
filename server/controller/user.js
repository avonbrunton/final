const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const Order = require("../models/order");
const { registerValidation } = require("../validation");

module.exports.login = async function (req, res) {
  const { username, password } = req.body;
  let query = {};
  if (username.includes("@")) {
    query["email"] = username;
  } else {
    query["phone"] = username;
  }
  let user = await User.findOne(query);
  if (user) {
    bcrypt.compare(password, user.password, (err, results) => {
      if (err) {
        throw new Error(err);
      }
      if (results) {
        let id = user._id;
        let token = jwt.sign({ id }, process.env.SCREAT_KEY);
        let userData = user.toObject();
        delete userData.password;
        if (!userData.is_admin) {
          delete userData.is_admin;
        }
        userData.token = token;
        return res.json({ user: userData });
      } else {
        return res.status(401).json({ err: "invalid username or password" });
      }
    });
  } else {
    return res.status(400).json({ err: "invalid username or password" });
  }
};

module.exports.register = async function (req, res) {
  const { error } = registerValidation(req.body);
  if (error) {
    return res.status(400).send({ message: error });
  }
  const { first_name, last_name, phone, email, address, password } = req.body;
  let exists_user = await User.findOne().or([{ phone }, { email }]);
  if (exists_user) {
    return res.status(400).json({ err: "user already exists" });
  }
  let salt = await bcrypt.genSalt(10);
  let hashedPassword = await bcrypt.hash(password, salt);
  const user = new User({
    first_name,
    last_name,
    phone,
    email,
    address,
    password: hashedPassword,
  });
  user
    .save()
    .then((obj) => {
      let token = jwt.sign({ id: obj._id }, process.env.SCREAT_KEY);
      let userData = obj.toObject();
      delete userData.password;
      delete userData.is_admin;
      userData.token = token;
      res.json({ user: userData });
    })
    .catch((err) => {
      console.log(err);
      user.destroy();
      res.json(err);
    });
};

module.exports.update_user = function (req, res) {
  const data = req.body;
  if (data.is_admin) {
    return res.status(401).json({ err: "unauthorize acess" });
  } else {
    User.findByIdAndUpdate({ _id: req.user._id }, { ...data })
      .then((obj) => res.status(200).send())
      .catch((err) => res.status(400).json(err));
  }
};

module.exports.get_user = async function (req, res) {
  let user = await User.findOne({ _id: req.user._id }).select(["-password"]);
  user = user.toObject();
  if (!user.is_admin) {
    delete user.is_admin;
  }
  return res.json({ user });
};
module.exports.get_all = async function (req, res) {
  let user = await User.find().select(["-password"]);
  return res.json(user);
};

module.exports.create_order = async (req, res) => {
  const { product, trans_id, name, total } = req.body;

  let orderObj = new Order();
  orderObj.user = req.user;
  orderObj.product = product;
  orderObj.amount = total;
  orderObj.transection_id = trans_id;
  orderObj.upi_name = name;
  orderObj.save();
  return res.send();
};

module.exports.get_order = async (req, res) => {
  let order = await Order.find();
  res.send(order);
};

module.exports.get_reset_link = async (req, res) => {
  const { email } = req.body;
  let user = await User.findOne({ email });
  if (user) {
    let token = jwt.sign({ id: user._id }, process.env.SCREAT_KEY);
    console.log("link=,", `http://localhost:3000/reset-password/${token}`);
    res.send(200);
  } else {
    res.status(400).json({ err: "user not found" });
  }
};

module.exports.change_password = async (req, res) => {
  const { token, password } = req.body;
  try {
    let payload = jwt.verify(token, process.env.SCREAT_KEY);
    if (payload.id) {
      let user = await User.findOne({ _id: payload.id });
      if (user) {
        let salt = await bcrypt.genSalt(10);
        let hash = await bcrypt.hash(password, salt);
        user.password = hash;
        user.save();
        return res.send("Password Change Sucessfully");
      }
    }
  } catch {}
  return res.status(400).json({ err: "Link is been expired" });
};
