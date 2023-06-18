const router = require("express").Router();
const { Product, Category, Tag } = require("../../models");

// GET all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [Category, { model: Tag, through: "product_tag" }],
    });
    res.json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Other routes (GET single product, POST, PUT, DELETE) can be implemented in a similar manner

module.exports = router;
