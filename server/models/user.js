const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {type: String,
        unique: true
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    password: {
        type: String
    },
    funFacts: {
        type: String,
        default: "No fun facts has been setup."
    },
    quote: {
        type: String,
        default: "No quote has been setup."
    },
    team: {
        type: String
    },
    birthday: {
        type: String
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    attempts: {
        type: Number
    },
      last: {},
      skills: {
        type: String,
        default: "No skills have been added yet!"
      },
});

module.exports = mongoose.model("User", UserSchema);