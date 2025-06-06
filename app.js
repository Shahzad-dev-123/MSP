import { join } from 'path'; // Add this line
import { existsSync } from 'fs'; // For file existence checking


import expree, { json } from 'express';
var app = expree()

import cors from "cors";
import { config } from "dotenv";

config()  // It must be at start and index file. This will read .env file and make all Environment Variable. and we can access them using process.env.VAR_NAME

var port = process.env.PORT | 8000  //PORT is default variable, so if not then default port which is 8000


// app.get('/',(req,res)=>{
//   res.status(200).json(allQuotes.quotes[0])
// })

//http://localhost:8000/user/signin

app.use(json()) // it will convert req body into json. required for signup.
app.use(cors())// it will add some headers in every response. so that our api can be called from anywhere.



app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Simple
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