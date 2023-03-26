const express = require("express");
const ProductController = require("../controller/product");
const { adminAuth } = require("../middleware/adminAuth");
const router = express.Router();
const multer = require("multer");
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/product/image");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + "." + file.mimetype.split("/")[1]
    );
  },
});

let upload = multer({ storage: storage });

router.get("/info", adminAuth, ProductController.basic_info);
router.get("/", ProductController.getAll);
router.post(
  "/",
  adminAuth,
  upload.single("image"),
  ProductController.create_product
);
router.get("/:id", adminAuth, ProductController.getOne);
router.patch(
  "/:id",
  adminAuth,
  upload.single("image"),
  ProductController.update
);
router.delete("/:id", adminAuth, ProductController.delete);
module.exports = router;
