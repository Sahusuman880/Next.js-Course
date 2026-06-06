"use client";

import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [data, setData] = useState({
    user: {
      email: "",
    },
  });
  const fetchData = async () => {
    const token = localStorage.getItem("auth_token");
    const response = await fetch("/api/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    if (data.user) {
      setData(data);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchData();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Email: {data.user.email}</p>
    </div>
  );
}
