import "./Search.css";
import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;
          setLoading(true)
      setUsers([])

    try {
      const results = await fetchUserData(query);
      setUsers(results);
    
    } catch (error) {
      setError(error)
      console.error(error.message);
    }
    finally{
      setLoading(false)
    }
  };

  return (
    <div className="query__container">

      <div className="query__heading-blk">
        <h1 className="query__heading">Github User Search</h1>
        <p className="query__txt">Browse users and their profiles via the GitHub API</p>
      </div>

      <form className="form" onSubmit={handleSearch}>
        <div className="field">
          <input
            className="field__input"
            value={query}
            placeholder="Enter Github username"
            type="text"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <button className="submit-btn" type="submit">
          Search
        </button>
      </form>

      <div className="query__output">
        <h3 className="query__output-heading">Search results</h3>
        {loading && <p> Loading...</p>}
        {error&& <p>Looks like we cant find the user: {error.message}</p>}
        <ol className="links">
          
          {users &&
            users.map((user) => (
              <li className="link__item" key={user.id}>
                <div className="item-avatar">
                  <img className="avatar" src={user.avatar_url} alt="User Avatar" />
                </div>

                <div className="item-name-link">
                  <p className="name">{user.login}</p>

                  <a
                    className="link"
                    href={user.html_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {user.html_url}
                  </a>
                </div>
 
           
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
}

export default Search;
