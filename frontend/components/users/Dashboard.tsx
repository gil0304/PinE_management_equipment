import React, { useEffect, useState } from "react";
import axios from "axios";

interface User {
  name: string;
}

const Dashboard = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await axios.get("http://localhost:3000/current_user", {
          withCredentials: true,
        });
        if (response.data.status) {
          window.location.href = "/";
        } else {
          setUser(response.data);
        }
      } catch (error) {
        console.error(error);
        // ログインしていない場合の処理、例えばログインページへのリダイレクト
        window.location.href = "/";
      }
    };

    fetchCurrentUser();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {user.name}!</p>
    </div>
  );
};

export default Dashboard;
