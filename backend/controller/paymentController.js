import stripe from "stripe";

const stripeInstance = stripe(process.env.STRIPE_SECRET_KEY);

export const processPayment = async (req, res, next) => {
  try {
    const myPayment = await stripeInstance.paymentIntents.create({
      amount: req.body.amount,
      currency: "inr",
      metadata: {
        company: "Ecommerce",
      },
    });

    res
      .status(200)
      .json({ success: true, client_secret: myPayment.client_secret });
  } catch (error) {
    console.error("Error processing payment:", error);
    res
      .status(500)
      .json({ success: false, error: "Payment processing failed" });
  }
};

export const sendStripeApiKey = async (req, res, next) => {
  try {
    res.status(200).json({ stripeApiKey: process.env.STRIPE_API_KEY });
  } catch (error) {
    console.error("Error sending Stripe API key:", error);
    res.status(500).json({ success: false, error: "Failed to send API key" });
  }
};
