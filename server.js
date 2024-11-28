const express = require("express");
const app = express();
const connectDB = require("./config/connectDB");
const routes = require("./Routes/UserCRUD")
require("dotenv").config();
app.use(express.json());
app.use("/user",routes);
const Port = process.env.PORT ; 


connectDB();

app.listen(Port, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is running on port " + Port);
    }
});
