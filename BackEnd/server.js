require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/config/db");
const interviewReport = require("./src/services/ai.services");
const {
  resume,
  selfDescription,
  jobDescription,
} = require("./src/services/temp");

connectDB();

interviewReport({ resume, selfDescription, jobDescription });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
