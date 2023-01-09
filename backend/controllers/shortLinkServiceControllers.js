const shortLinkModel = require("../models/shortLinkModel");

// shortLinkServiceControllers object - module scaffolding.
const shortLinkServiceControllers = {};

// short Link Service Controllers
shortLinkServiceControllers.redirectRequests = async (req, res) => {
  try {
    const { short_path } = await req.params;
    const linkObject = await shortLinkModel.findOne({ short_path });
    if (!linkObject) {
      return res.status(404).send("Invalid Url");
    }

    await linkObject.clicked++;
    linkObject.save();

    res.redirect(linkObject.original_url);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// exporting module
module.exports = shortLinkServiceControllers;
