"use client";
import { useCart, useUser } from "@/app/services/queries";

export default function Cart() {
  const userQuery = useUser();
  const cartQuery = useCart();

  return (
    <div>
      <p>
        username:{" "}
        {userQuery.isLoading ? "Loading..." : userQuery.data?.userName}
      </p>
      <p>
        total cart cost:{" "}
        {cartQuery.data
          ? cartQuery.data.totalCost
          : cartQuery.isLoading
          ? "Loading..."
          : "No user found!"}
      </p>
    </div>
  );
}
