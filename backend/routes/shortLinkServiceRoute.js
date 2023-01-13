const express = require("express");
const {
  redirectRequests,
} = require("../controllers/shortLinkServiceControllers");
const requireAuth = require("../middlewares/requireAuth");
const router = express.Router();

// recive users requests and redirect those to their destination
router.get("/:short_path", redirectRequests);

module.exports = router;
