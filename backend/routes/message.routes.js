import express from "express"; //import the express package
import {
  getMessages,
  sendMessage,
} from "../controllers/message.controllers.js"; //this import enables the messageRoutes
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage);

export default router;
