var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// TODO enter min and max values.

var Default_Values = new Schema({
      info:{type: Number}
});

module.exports = mongoose.model("Default_Values", Default_Values);
