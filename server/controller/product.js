const Product = require("../models/product");
const User = require("../models/user");
const Order = require("../models/order");
const { productValidation } = require("../validation");

module.exports.getAll = async function (req, res) {
  let data = await Product.find({});
  return res.send(data);
};

module.exports.getOne = async function (req, res) {
  const { id } = req.params;
  let data = await Product.findOne({ id });
  return res.json(data);
};

module.exports.create_product = async function (req, res) {
  const { error } = productValidation(req.body);
  if (error) {
    return res.status(400).send({ message: error });
  }
  const { title, price, story, label } = req.body;
  const product = new Product({
    title,
    price,
    story,
    image: req.file.filename,
    label,
  });
  product
    .save()
    .then((data) => res.json({ data }))
    .catch((err) => {
      console.log(err);
      res.status(400).json({ err });
    });
};

module.exports.update = async function (req, res) {
  const { id } = req.params;
  let data = req.body;
  if (req.file?.filename) {
    data.image = req.file?.filename;
  }
  Product.findByIdAndUpdate({ _id: id }, { ...data })
    .then(() => res.send())
    .catch((err) => res.send(err));
};

module.exports.delete = async function (req, res) {
  const { id } = req.params;
  Product.findByIdAndDelete({ _id: id })
    .then(() => res.send())
    .catch((err) => res.send(err));
};

module.exports.basic_info = async function (req, res) {
  let user = await User.find().count();
  let product = await Product.find().count();
  let order = await Order.find().count();
  return res.send({ user, product, order });
};
