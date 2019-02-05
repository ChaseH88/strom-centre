const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamSchema = new Schema({
    name: {
        type: String,
        default: null,
        unique: true
      },
      isActive: {
        type: Boolean,
        default: true
      },
      message: {
        type: String,
        default: null
      },
      tagline: {
        type: String,
        default: "Tagline Here."
      },
      teamLead: {
          type: String,
          default: "None"
      }
    });

module.exports = mongoose.model("Team", teamSchema);