const hostname = '0.0.0.0';


//create dependencies
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000; 

const app = express();

//built-in middleware function
app.use("/static", express.static(path.resolve(__dirname, "frontend_SPA", "static")));

app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname,"frontend_SPA", "index.html"))
  });

app.listen(PORT, () => console.log("Server Running...") );
//app.listen(PORT, () => console.log("Server Running on Port %d") );


