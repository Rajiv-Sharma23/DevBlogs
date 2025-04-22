import express from "express";
import UserRoute from "../Backend/routes/user.route.js"
import UserPosts from "../Backend/routes/post.route.js"
import UserComments from "../Backend/routes/comment.route.js"

const app = express();

const port = process.env.PORT;

app.listen(port, () => {
  console.log("Server is running on port :",{port});
});

app.use("/users",UserRoute);
app.use("/posts",UserPosts);
app.use("/comments",UserComments);
