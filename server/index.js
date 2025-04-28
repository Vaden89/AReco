import ApiRouter from "./src/routes/router.js";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
const PORT = 3000;

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", ApiRouter);

mongoose
  .connect(
    process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/academic-record"
  )
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listening on PORT ${PORT}`);
    });
  })
  .catch((err) =>
    console.log("There was an error connecting to mongoDB: ", err)
  );
