const express = require("express"); 
const port = 8080; 
const app = express();

const egyptRoute = require('./routes/egypt');
const maliRoute = require('./routes/mali');
const pakistanRoute = require('./routes/pakistan');


app.use("/egypt", egyptRoute);
app.use("/pakistan", pakistanRoute);
app.use("/mali", maliRoute);


app.listen(port, () => {
    console.log("server running...")
});