import express from "express";
import { connectDB } from "../Backend/libs/connectDB.js";
import UserRoutes from "../Backend/routes/user.route.js";
import UserPosts from "../Backend/routes/post.route.js";
import UserComments from "../Backend/routes/comment.route.js";
import webhookRoutes from "../Backend/routes/webhook.route.js"; 
import { clerkMiddleware, requireAuth } from '@clerk/express'
import cors from "cors";
import  Dotenv from 'dotenv'

// const corsOptions = {
//   origin: "http://localhost:3000",
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };
Dotenv.config();

const app = express();
connectDB();

app.use(cors(process.env.CLIENT_URL));
app.use("/webhooks", webhookRoutes);
app.use(express.json());
const port = process.env.PORT;

// allow cross-origin requests
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use(clerkMiddleware())

// app.get("/auth-state", (req, res) => {
//   const authState = req.auth;
//   res.json(authState);
// });

// app.get("/protect", (req, res) => {
//   const {userId} = req.auth;
//   if(!userId){
//     return res.status(401).json("not authenticated")
//   }
//   res.status(200).json("content")
// });

// app.get("/protect2", requireAuth(), (req, res) => {
//   res.status(200).json("content")
// });

app.listen(port, () => {
  console.log("Server is running on port :", { port });
});

app.use("/users", UserRoutes);
app.use("/posts", UserPosts);
app.use("/comments", UserComments);
