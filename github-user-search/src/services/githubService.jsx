import axios from "axios";

const API_URL = import.meta.env.VITE_APP_GITHUB_API_URL  

export const searchUsers = async (username) => {
try {
  const response = await axios.get(`${API_URL}/search/users`,{
    params: {q: username},
 
  })
 console.log(response.data)
  return response.data.items;
  
} catch (error) {
  console.log("Error fetching Github users", error)
  throw error
}


}
