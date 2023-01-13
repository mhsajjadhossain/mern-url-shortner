const { Schema, mongoose } = require("mongoose");
const shortid = require("shortid");

const shortLinkSchema = new Schema(
  {
    original_url: {
      type: String,
      required: true,
      maxLength: 150,
    },
    short_path: {
      type: String,
      required: true,
      default: shortid.generate,
    },
    clicked: {
      type: Number,
      required: true,
      default: 0,
    },
    user_id: {
      type: String,
      required: true,
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ShortLink", shortLinkSchema);
