const shortLinkModel = require("../models/shortLinkModel");
var validator = require("validator");
// const { all } = require("../routes/sortLinkRoute");
const { mongoose } = require("mongoose");
// shortLinkControllers object - module scaffolding.
const shortLinkControllers = {};

// get all short links
shortLinkControllers.getAllShortLink = async (req, res) => {
  try {
    const allLinks = await shortLinkModel.find({});
    res.status(200).json(allLinks);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// create short links
shortLinkControllers.createShortLink = async (req, res) => {
  try {
    const { original_url } = await req.body;
    // check if it is a valid url
    if (!validator.isURL(original_url)) {
      return res.status(400).json({ error: "invalid URL input" });
    }
    const shortUrlObject = await shortLinkModel.create({ original_url });
    res.status(200).json(shortUrlObject);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// update short links
shortLinkControllers.updateShortLink = async (req, res) => {
  try {
    const { id } = await req.params;
    const { original_url } = await req.body;
    // check if the id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such list found" });
    }
    await shortLinkModel.findOneAndUpdate({ _id: id }, { original_url });
    const link = await shortLinkModel.findOne({ _id: id });
    res.status(200).json(link);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// delete short links
shortLinkControllers.deleteShortLink = async (req, res) => {
  try {
    const { id } = await req.params;
    // check if the id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such list found" });
    }

    const link = await shortLinkModel.findOneAndDelete({ _id: id });
    if (!link) {
      return res.status(404).json({ error: "No such link found" });
    }
    res.status(200).json(link);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// exporting module
module.exports = shortLinkControllers;
