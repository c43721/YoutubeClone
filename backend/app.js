const express = require("express");
const cors = require("cors");
const config = require("config");
const mongoose = require("mongoose");
const CommentRoute = require("./routes/comment-routes");
const ReplyRoute = require("./routes/reply-routes");
const EngagementRoute = require("./routes/engagement-routes");

const app = express();

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Listening on http://localhost:${port}/`));

try {
  mongoose
    .connect(config.get("mongoURI"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB."));
} catch (err) {
  console.log(`Could not connect to MongoDB.\nError: ${err}`);
  process.exit(24);
}

app.use(cors());
app.use(express.json());
app.use("/api/comments", CommentRoute);
app.use("/api/reply", ReplyRoute);
app.use("/api/engagement", EngagementRoute);
