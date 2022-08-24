import express from "express";
import path from "path"

// Read from env file
require("dotenv").config();

const app = express()
app.use("/", express.static(path.join(__dirname, "./portfolio/dist")))
app.use("/admin", express.static(path.join(__dirname, "./project-manager-app/dist")))

let server = app.listen(process.env.SERVER_PORT, () => {
    console.info(`Listening to port ${process.env.SERVER_PORT}`);
});
module.exports = app;