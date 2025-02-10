import Razorpay from "razorpay";

export const POST = async (req) => {
  try {
    const body = await req.json(); // Use req.json() instead of req.body in App Router
    const { amount } = body;

    if (!amount) {
      return new Response(JSON.stringify({ message: "Amount is required" }), {
        status: 400,
      });
    }

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const options = {
      amount: amount * 100, // Convert INR to paise
      currency: "INR",
      receipt: `order_rcptid_${Math.floor(Math.random() * 1000)}`,
      payment_capture: 1,
    };

    const order = await razorpay.orders.create(options);

    return new Response(JSON.stringify(order), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Error creating order", error }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
