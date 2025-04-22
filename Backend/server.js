import express from "express";
import { connectDB } from "../Backend/libs/connectDB.js";
import UserRoutes from "../Backend/routes/user.route.js";
import UserPosts from "../Backend/routes/post.route.js";
import UserComments from "../Backend/routes/comment.route.js";
import webhookRoutes from "../Backend/routes/webhook.route.js"; 

const app = express();
connectDB();

app.use("/webhooks", webhookRoutes);
app.use(express.json());
const port = process.env.PORT;

app.listen(port, () => {
  console.log("Server is running on port :", { port });
});

app.use("/users", UserRoutes);
app.use("/posts", UserPosts);
app.use("/comments", UserComments);
