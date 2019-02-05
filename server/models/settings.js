const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const settingSchema = new Schema({
        name: {
            type: String
        },
        active: {
            type: Boolean,
            default: true
        },
        author: {
            type: String
        },
        team: {
            type: String
        }
    });

module.exports = mongoose.model("Setting", settingSchema);