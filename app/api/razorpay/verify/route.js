import crypto from "crypto";

export const POST = async (req) => {
  try {
    const body = await req.json();
    const { payment_id, order_id, signature } = body;

    const generated_signature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(order_id + "|" + payment_id)
      .digest("hex");

    if (generated_signature !== signature) {
      return new Response(JSON.stringify({ success: false, message: "Invalid payment signature" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: "Payment verification failed", error }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
