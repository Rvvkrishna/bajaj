const mongoose = require("mongoose");

const operationSchema = mongoose.Schema({
  status: {
    type: String,
    require: true,
  },
  userid: {
    type: String,
    require: true,
    },
    email: {
      type: String,
      require: true,
    },
    rollno: {
      type: String,
      require: true,
      },
      numbers: {
        type: [String],
        require: true,
      },
      alphabets: {
        type: [String],
        require: true,
        }, 
      highestalphabet: {
        type: String,
        require: true
      }
  
});

const Operations = mongoose.model("task", operationSchema);
module.exports = Operations;