const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cookieParser());

/* Here is the All Required routes */
const authRouter = require("./routers/auth.routes");

/* Using All Required routes */
app.use("/api/auth", authRouter);

module.exports = app;
