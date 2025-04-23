import { Webhook } from "svix";
import User from "../models/user.model.js";

export const clerkWebhook = async (req, res) => {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error("Webhook secret needed");
  }

  const payload = req.body;
  const headers = req.headers;

  const wh = new Webhook(WEBHOOK_SECRET);
  let event;

  try {
    event = wh.verify(payload, headers);
  } catch (err) {
    return res.status(400).json({ message: "Webhook Verification Failed" });
  }

  const { type, data } = event;

  try {
    if(event.type === "user.created") {
      const existingUser = await User.findOne({
        $or: [
          { clerkUserId: event.data.id },
          { username: event.data.username || event.data.email_addresses[0].email_address.split("@")[0] }
        ]
      });
    
      if (existingUser) {
        return res.status(200).json({ message: "User already exists" });
      }
    
      const newUser = new User({
        clerkUserId : event.data.id,
        username : event.data.username || event.data.email_addresses[0].email_address.split("@")[0],
        email: event.data.email_addresses[0].email_address,
        img: event.data.profile_image_url
      });
    
      await newUser.save();
    }
    

    if (type === "user.updated") {
      const updatedUser = await User.findOneAndUpdate(
        { clerkUserId: data.id },
        {
          username: data.username || data.email_addresses[0].email_address.split("@")[0],
          email: data.email_addresses[0].email_address,
          img: data.profile_image_url,
        },
        { new: true }
      );

      console.log("🔄 User updated:", updatedUser?.clerkUserId);
    }

    if (type === "user.deleted") {
      const deletedUser = await User.findOneAndDelete({ clerkUserId: data.id });
      console.log("❌ User deleted:", deletedUser?.clerkUserId);
    }

    res.status(200).json({ message: "Webhook Received" });
  } catch (err) {
    console.error("❌ Error handling webhook:", err);
    res.status(500).json({ message: "Error processing webhook", error: err.message });
  }
};





// import { Webhook } from "svix";
// import User from "../models/user.model.js";

// export const clerkWebhook = async (req, res) => {
//   const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

//   if (!WEBHOOK_SECRET) {
//     throw new Error("Webhook secret needed");
//   }
//   const payload = req.body;
//   const headers = req.headers;

//   const wh = new Webhook(WEBHOOK_SECRET);
//   let event;
//   try {
//     event = wh.verify(payload, headers);
//   } catch (err) {
//     res.status(400).json({
//         message:"Webhook Verification Failed",
//     });
//   }

//   // Do something with the message...

// //   console.log(event.data);
  
//   if(event.type === "user.created") {
//     const newUser = new User({
//         clerkUserId : event.data.id,
//         username : event.data.username ||
//         event.data.email_addresses[0].email_address.split("@")[0],
//         email: event.data.email_addresses[0].email_address,
//         img: event.data.profile_image_url
//     })

//     await newUser.save();
//   }

//  res.status(200).json({
//     message:"Webhook Recieved",})
// };
