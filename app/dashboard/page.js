'use client';
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const paymentStatus = localStorage.getItem("payment_status");

    if (paymentStatus !== "paid") {
      router.push("/#pricing");
    }
  }, [router]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Welcome to Your Dashboard</h1>
      <p className="text-gray-600">Enjoy your premium features.</p>
    </div>
  );
}
