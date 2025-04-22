import { Webhook } from "svix";

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
    res.status(400).json({
        message:"Webhook Verification Failed",
    });
  }

  // Do something with the message...

//   console.log(event.data);
  
  if(event.type === "user.created") {
    const newUser = new User({
        clerkUserID : event.data.id,
        username : event.data.username || event.data.email_addresses[0].email_address,
        email: event.data.email_addresses[0].email_address,
        img: event.data.profile_image_url
    })

    await newUser.save();
  }

 res.status(200).json({
    message:"Webhook Recieved",})
};
