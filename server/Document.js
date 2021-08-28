const { Schema, model } = require("mongoose")

const Document = new Schema({
  _id: String,
  data: Object,
  next:{
    type:String,
    required:true,
    default:"/"
},
Prev:{
  type:String,
  required:true,
  default:"/"
}

})

module.exports = model("Document", Document)