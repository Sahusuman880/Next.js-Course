"use client";

import { useSearchParams } from "next/navigation";

export default function CouserFilter() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const sort = searchParams.get("sort");
  return (
    <h1>
      Current Filter: {category || "all categories"} - {sort || "all sorts"}
    </h1>
  );
}
