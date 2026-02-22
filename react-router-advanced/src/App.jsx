import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./components/Profile";
import BlogPost from "./pages/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";

const isLoggedIn = false; 


function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/profile">Profile</Link> |{" "}
        <Link to="/blog/1">Sample Blog</Link>
      </nav>

      <Routes>
  <Route
    path="/profile/*"
    element={
      <ProtectedRoute isAuthenticated={isLoggedIn}>
        <Profile />
      </ProtectedRoute>
    }
  />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;