//mongoose dependencies
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//create schema
var Schema = new Schema(
  {
    data: {
      type: Object,
      default: {}
    }
  },
  { minimize: false }
);

//create model
var Model = mongoose.model("Model", Schema);

module.exports = Model;
