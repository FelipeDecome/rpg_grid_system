const express = require("express");

const app = express();

app.use("/images", express.static("./assets/images"));
app.use("/dist", express.static("./dist"));
app.use("/", express.static("./public"));

try {
  app.listen(3000, () => {
    console.log("server listening on 3000");
  });
} catch (e) {
  console.log(e);
}
