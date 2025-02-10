"use client";

export default function RazorpayButton({ amount }) {
  const handlePayment = async () => {
    const res = await fetch("/api/razorpay/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    });

    const order = await res.json();
    
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Your Business Name",
      description: "Payment for order",
      order_id: order.id,
      handler: function (response) {
        alert("Payment Successful: " + response.razorpay_payment_id);
        // Handle success (update database, redirect, etc.)
      },
      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
        contact: "9999999999",
      },
      theme: { color: "#3399cc" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <button onClick={handlePayment} className="bg-blue-500 text-white px-4 py-2">
      Pay ₹{amount}
    </button>
  );
}
