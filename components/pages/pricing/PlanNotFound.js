import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PlanNotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Plan Not Found</h1>
      <Link href="/">
        <Button className="mt-4">Go Back</Button>
      </Link>
    </div>
  );
}
