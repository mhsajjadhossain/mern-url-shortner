const express = require("express");
const {
  getAllShortLink,
  createShortLink,
  updateShortLink,
  deleteShortLink,
} = require("../controllers/shortLinkControllers");
const router = express.Router();

// get all short links
router.get("/", getAllShortLink);
// get all short links
router.post("/", createShortLink);
// get all short links
router.patch("/:id", updateShortLink);
// get all short links
router.delete("/:id", deleteShortLink);

module.exports = router;
