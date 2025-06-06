const express = require('express');
const cors = require('cors');
const { config } = require('dotenv');

config();

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});



// With DB
// mongoose.connect(process.env.MONGO_CONNECTIONSTRING)
// .then(()=>{
//   app.listen(port,(err)=>{
//     if(err){
//       console.log(err)
//     }else{
//       console.log(`app listening on port http://localhost:${port}`)
//     }
//   });
// })
// .catch((err)=>{
//   console.log("Not connect to DB: " + err)
// })




//mongodb+srv://shahzad:87654321@cluster0.wi5wf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
