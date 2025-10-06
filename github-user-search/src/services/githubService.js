import axios from "axios";

export const API_URL = import.meta.env.VITE_APP_GITHUB_API_URL || 'https://api.github.com'

export const fetchUserData = async ({ username, location, page = 1, per_page = 10 }) => {
  try {
    let query = username;
    if (location) {
      query += ` location:${location}`
    }
    const response = await axios.get(`${API_URL}/search/users`, {
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