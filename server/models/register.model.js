const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const registerSchema = new Schema({
  name: {
    type: String,
  },
  year: {
    type: Number,
  },
  amount: {
    type: Number,
  }
});

const Register = mongoose.model("Register", registerSchema);

module.exports = Register;
