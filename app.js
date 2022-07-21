const dbURI =
   "mongodb+srv://usernametest:passwordtest@nodetest.eeqtb.mongodb.net/node-tuts?retryWrites=true&w=majority";

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const personRoute = require("./router/person");
const cors = require("cors");
app.use(cors());
mongoose
   .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
   .then((res) => {
      console.log("connected to database");
      app.listen(4000);
   })
   .catch((err) => {
      console.log(err);
   });

// app.use(cors());
app.use(express.json());
app.use("/person", personRoute);

app.use((req, res) => {
   res.send("404");
});

// mô hình MVC
// model, view, controller

// giúp viết code gọn hơn, dễ đọc, dễ sửa
// hoạt động theo flow : request -> router -> controller -> trả về view -> send response để hoạt động
