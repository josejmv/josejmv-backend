import express from "express";
import * as messageController from "../controllers/message.controller.js";

const {Router} = express
const router = Router();

router.get("/messages/:page", messageController.findAll);
router.get("/message/:id", messageController.findOne);
router.post("/message", messageController.create);
router.delete("/message/:id", messageController.deleteOne);
router.put("/message/:id", messageController.updateOne);

export default router;
