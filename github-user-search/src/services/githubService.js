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
    const response = await axios.get(`https://api.github.com/search/users`, {
      params: {
        q: query,
        page,
        per_page,  
      },

    })
    // console.log(response.data)
    return response.data.items;

  } catch (error) {
    console.log("Error fetching Github users", error)
    throw error
  }


}