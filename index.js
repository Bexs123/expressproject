require("dotenv").config();

const express = require("express");
const app = express();
const userRouter = require("./routes/user");
const indexRouter = require("./routes/index");
const errorRouter = require("./routes/error");
const aboutRouter = require("./routes/about");
const testingRouter = require("./routes/testing");

app.use(express.json());

// Index route
app.use("/", indexRouter);

// User route
app.use("/users", userRouter);

// Testing route
app.use("/testing", testingRouter);

// About route
app.use("/about", aboutRouter);

// All route
app.use("*", errorRouter);

// creates socket
app.listen(process.env.HTTP_PORT, () => {
    console.log("Web App Online");
});