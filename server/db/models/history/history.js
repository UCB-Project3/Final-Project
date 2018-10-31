const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const needSchema = new Schema({
  prdId: {
    type: String,
    required: true
  },

  name: {
    type: String,
    required: true
  },

  brand: {
    type: String,
    required: false
  }
});

const History = mongoose.model("history", needSchema);

module.exports = History;
