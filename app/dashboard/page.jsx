"use client";
import React from "react";
import { useRouter } from "next/navigation";

function DashboardPage() {
  const router = useRouter();
  function handleClick() {
    router.push("/");
  }
  return (
    <div>
      <h1>Dashboard Page</h1>
      <button onClick={handleClick}>Go to Home</button>
    </div>
  );
}

export default DashboardPage;
