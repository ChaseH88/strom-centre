const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectsSchema = new Schema({
        name: {
            type: String
        },
        description: {
            type: String
        },
        status: {
            type: String
        },
        isComplete: {
            type: Boolean,
            default: false
        },
        isPrivate: {
            type: Boolean,
            default: true
        },
        owners: [{
            type: String
        }],
        author: {
            type: String
        },
        deadline: {
            type: Date,
            default: Date.now()
        },
        delivery: {
            type: Date,
            default: Date.now()
        }
    });

module.exports = mongoose.model("Project", projectsSchema);