const express = require("express");
const app = express();

require("dotenv").config();
const dbConfig = require("./config/dbConfig");
app.use(express.json());
const employeeRoute = require("./routes/employeeRoute");
const studentRoute = require("./routes/studentRoute");
const resultsRoute = require("./routes/resultsRoute");

app.use("https://delicate-sfogliatella-b1241d.netlify.app/api/employee/", employeeRoute);
app.use("https://delicate-sfogliatella-b1241d.netlify.app/api/student/", studentRoute);
app.use("https://delicate-sfogliatella-b1241d.netlify.app/api/results/", resultsRoute);
const path = require("path");

const port = process.env.PORT || 5000;
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build/index.html"));
  });
}

app.listen(port, () => console.log(`Node JS app listening on port ${port}!`));
