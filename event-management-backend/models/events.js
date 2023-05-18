const mongoose = require("mongoose");
const { Schema } = mongoose;
const userRegSchema = new Schema({
  EventCategory: String,

  EventName: String,

  EventDate: String,

  Time: String,

  Description: String,

  ImageURL: String,

  NumberofPersons: String,
});
const UserReg = mongoose.model("events", userRegSchema);
module.exports = UserReg;
