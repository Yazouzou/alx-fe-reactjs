import { useState } from "react";

// Simple authentication simulation
export default function useAuth() {
  // Set to true to simulate logged-in user
  const [isAuthenticated] = useState(false);
  return isAuthenticated;
}