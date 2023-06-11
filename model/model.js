const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }
})

let User = mongoose.model("User", userSchema);

module.exports = { User };