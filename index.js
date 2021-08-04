const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
var cors = require("cors");
const courseRoute = require("./routes/course");
app.use(cors());
dotenv.config();
app.use(express.json());
const port=process.env.PORT;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify:true
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));





app.use("/api/course", courseRoute);

app.listen(port, () => {
  console.log(`Backend is running.${port}`);
});
