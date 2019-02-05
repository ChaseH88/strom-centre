const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const historySchema = new Schema({
        parentItem: {
            type: String
        },
        author: [{
            type: String
        }],
        date: [{
            type: Date,
            default: Date.now()
        }],
        historyData: [{
            type: String
        }]
    });

module.exports = mongoose.model("History", historySchema);