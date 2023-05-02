const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((ex) => {
    console.log("DB connection failed:", ex);
  });
