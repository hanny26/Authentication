
const mongoose = require('mongoose');

const DB = "mongodb+srv://hannyvyas:hanny9054@cluster0.f9odr8p.mongodb.net/Authentication?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(DB, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}).then(() => console.log("connection successful")).catch((err)=>{
    console.log(err);
})