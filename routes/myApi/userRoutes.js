const router = require("express").Router();
const userController = require("../../controllers/userController");


// Matches with "/api/articles"
router.route("/")
  .get(userController.findAll)
  .get(userController.findOne)
  .post(userController.create);

// Matches with "/api/articles/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;