// src/components/UserProfile.jsx
import React, { useContext } from "react";
import UserContext from "./UserContext.js";

function UserProfile() {
  const user = useContext(UserContext);

  return (
    <div style={{
      border: "1px solid #333",
      padding: "15px",
      borderRadius: "8px",
      maxWidth: "300px",
      margin: "20px auto",
      backgroundColor: "#f5f5f5"
    }}>
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
}

export default UserProfile;
