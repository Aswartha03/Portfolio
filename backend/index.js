let express = require ('express');
let app = express ();
app.use (express.json ());

var cors = require ('cors');
const connectToDb = require('./configs/db');
const contactRouter = require('./routes/contactRoutes');
app.use (cors ());


require ('dotenv').config ();
const Port = process.env.PORT || 3000;

connectToDb()

// test route
app.get ('/test', (req, res) => {
  res.status (200).json ({message: 'Test Route is Working'});
});

// contact routes 
app.use("/contact",contactRouter)
// unhandled route
app.use ((req, res) => {
  res.status (404).json ({message: '404, Route is not found....'});
});

app.listen (Port, () => {
  console.log (`Server is running on the ${Port} port`);
});
