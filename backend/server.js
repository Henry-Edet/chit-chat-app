import express from "express"; //import the express package
import dotenv from "dotenv"; //this import enables the.env file to be loaded
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js"; //this import enables the authRoutes
import messageRoutes from "./routes/message.routes.js"; //this import enables the messageRoutes
import userRoutes from "./routes/user.routes.js"; //this import enables the userRoutes
import refreshRoutes from "./routes/refreshToken.routes.js"; //this import enables the refresh
import protectRoute from "./middleware/protectRoute.js";

import generateTokenAndSetCookie from "./utils/generateToken.js";

import connectDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

const PORT = process.env.PORT || 5555; //this is the port that the server will listen on 8000 or 5555 if there is no port specified

dotenv.config(); //this line enables the.env file to be loaded
app.use(express.json()); //to parse the incoming request with json payloads(from req.body)
app.use(cookieParser()); //this line is the middleware that enables the cookieParser

// Example route to generate tokens
app.post("/login", (req, res) => {
  const userId = req.body.userId;
  generateTokenAndSetCookie(userId, res);
  res.sendStatus(200);
});

app.use("/api/auth/", authRoutes); //this line is the middleware that enables the authRoutes
app.use("/api/messages", messageRoutes); //this line is the middleware that enables the messageRoutes
app.use("/api/users", userRoutes); //this line is the middleware that enables the messageRoutes
app.use("/api/refresh-token", refreshRoutes); //this line is the middleware that enables the refresh

// Protected route
app.get("/protected", protectRoute, (req, res) => {
  res.send("This is a protected route");
});

server.listen(`${PORT}`, () => {
  connectDB();
  console.log(`Server is listening on port ${PORT}!`);
});
