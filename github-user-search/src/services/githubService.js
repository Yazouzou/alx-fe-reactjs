import axios from "axios";

export const fetchUserData = async (username) => {
  const response = await axios.get(
    `https://api.github.com/users/${username}`
  );
  return response.data;
};

export const searchUsers = async (
  username,
  location,
  minRepos,
  page = 1
) => {
  let query = username;

  if (location) {
    query += ` location:${location}`;
  }

  if (minRepos) {
    query += ` repos:>=${minRepos}`;
  }

  const response = await axios.get(
    "https://api.github.com/search/users",
    {
      params: {
        q: query,
        page: page,
        per_page: 10,
      },
    }
  );

  return response.data.items;
};
