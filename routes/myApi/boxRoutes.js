const router = require("express").Router();
const boxController = require("../../controllers/boxController");


// Matches with "/api/articles"
router.route("/")
  .get(boxController.findAll)
  .get(boxController.findByCat)
  .get(boxController.findBySize)
  .get(boxController.findOne)
  .post(boxController.create);

// Matches with "/api/articles/:id"
router
  .route("/:id")
  .get(boxController.findById)
  .put(boxController.update)
  .delete(boxController.remove);

module.exports = router;