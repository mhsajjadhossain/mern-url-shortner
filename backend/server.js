/**
 * Title: Main Server File
 * Description: Main Server file of the application
 * Author: M.h Sajjad Hossain Ripon
 * Data: Mon,2023-01-09
 * Time: 14:41:56.000-05:00
 */

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const sortLinkRoute = require("./routes/sortLinkRoute");
const shortLinkServiceRoute = require("./routes/shortLinkServiceRoute");
const userRoutes = require("./routes/usersRoutes");
const app = express();
const cors = require("cors");
/**====================================
 * ? Middleware
=======================================*/
app.use(express.json());
app.use(cors());

/**====================================
 * ? Routes
=======================================*/
app.use("/api/links", sortLinkRoute);
app.use("/short", shortLinkServiceRoute);
app.use("/api/users", userRoutes);
// app.use("/api/todo", todoRoutes);
// app.use("/api/lists", listRoutes);

app.get("/", (req, res) => res.json({ hello: "Hello World!" }));

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`App listening on port ${process.env.PORT}!`)
    );
  })
  .catch((err) => {
    console.log("error from db connect:-------", err);
  });
