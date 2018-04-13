const path = require("path");
const router = require('express').Router();
const userRoutes = require("./userRoutes.js");
const boxRoutes = require("./boxRoutes.js");
const productRoutes = require("./productRoutes.js");


router.use("/user", userRoutes);
router.use("/box", boxRoutes);
router.use("/product", productRoutes);

module.exports = router;