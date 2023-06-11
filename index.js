var bodyParser = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();

const router = require("./routes/web");

//connect database(mongoDB)
dotenv.config();
mongoose.connect(process.env.MONGODB_URL)
    .then(() =>
        console.log("Connected To MongoDB")
    )

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));

//routes
app.use("/v1/User", router);


app.listen(8000, () => {
    console.log("server is running..");
})
