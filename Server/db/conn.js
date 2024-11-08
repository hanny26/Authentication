
const mongoose = require('mongoose');

const DB = "mongoose_string"

mongoose.connect(DB, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}).then(() => console.log("connection successful")).catch((err)=>{
    console.log(err);
})
