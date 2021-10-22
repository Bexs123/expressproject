require("dotenv").config();

const express = require("express");
const app = express();
const aboutRouter = require("./routes/about");
const errorRouter = require("./routes/error");
const indexRouter = require("./routes/index");
const userRouter = require("./routes/user");
const testingRouter = require("./routes/testing");

app.use(express.json());

app.use("/", indexRouter);
app.use("/users", userRouter);
app.use("/testing", testingRouter);
app.use("/about", aboutRouter);
app.use("*", errorRouter);

app.listen(process.env.HTTP_PORT, () => {
    console.log("Web App Online");
});