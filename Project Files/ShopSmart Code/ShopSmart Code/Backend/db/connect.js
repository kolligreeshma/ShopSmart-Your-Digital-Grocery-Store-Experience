const mongoose = require("mongoose");
const db= 'mongodb+srv://CRIZAL:apintership@cluster0.3ofmjhn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
// Connect to MongoDB using the connection string

mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log(`Connection successful`);
}).catch((e) => {   
  console.log(`No connection: ${e}`);   
});
