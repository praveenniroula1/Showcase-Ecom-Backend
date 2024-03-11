import express from "express";
import {
  processPayment,
  sendStripeApiKey,
} from "../controller/paymentController.js";
const router = express.Router();
import { isAuthenticatedUser } from "../middlewares/auth.js";

router.route("/payment/process").post(isAuthenticatedUser, processPayment);

router.route("/stripeapikey").get(isAuthenticatedUser, sendStripeApiKey);

export default router;
