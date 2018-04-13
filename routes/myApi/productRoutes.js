const router = require("express").Router();
const productController = require("../../controllers/productController");


// Matches with "/api/articles"
router.route("/")
  .get(productController.findAll)
  .get(productController.findByCat)
  .get(productController.findBySize)
  .get(productController.findOne)
  .post(productController.create);

// Matches with "/api/articles/:id"
router
  .route("/:id")
  .get(productController.findById)
  .put(productController.update)
  .delete(productController.remove);

module.exports = router;