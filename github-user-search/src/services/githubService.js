import axios from "axios";

export const API_URL = import.meta.env.VITE_APP_GITHUB_API_URL || 'https://api.github.com/search/users'

export const fetchUserData = async ({ username, location, minRepos, page = 1, per_page = 10 }) => {
  try {
    let query = username;
    if (location) {
      query += ` location:${location}`
    }

    if(minRepos) {
      query += ` repos:>${minRepos}`
    }
  const response = await axios.get(`https://api.github.com/search/users?q`, {
  params: { q: query, page, per_page },
  paramsSerializer: params => {
    // Remove the duplicate 'q=' key
    const { q, ...rest } = params;
    const queryString = new URLSearchParams(rest).toString();
    return `${encodeURIComponent(q)}${queryString ? '&' + queryString : ''}`;
  }
});

    // console.log(response.data)
    return response.data.items;

  } catch (error) {
    console.log("Error fetching Github users", error)
    throw error
  }


}