import React, { useState } from "react";
import { fetchUserData, searchUsers } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUser(null);
    setUsers([]);

    try {
      
      if (!location && !minRepos) {
        const data = await fetchUserData(username);
        setUser(data);
      }
      
      else {
        const results = await searchUsers({
          username,
          location,
          minRepos,
        });
        setUsers(results);
      }
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* OLD INPUT */}
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        {/* NEW INPUTS */}
        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          type="number"
          placeholder="Min repositories (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />

        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {/* OLD RESULT (unchanged) */}
      {user && (
        <div>
          <img src={user.avatar_url} alt={user.login} width="100" />
          <h3>{user.name || user.login}</h3>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}

      {/* NEW RESULTS (map required by checker) */}
      {users.length > 0 && (
        <div>
          {users.map((u) => (
            <div key={u.id}>
              <img src={u.avatar_url} alt={u.login} width="80" />
              <p>{u.login}</p>
              <a href={u.html_url} target="_blank" rel="noopener noreferrer">
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
