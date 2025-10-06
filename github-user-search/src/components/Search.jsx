import "./Search.css";
import { useState } from "react";
import { fetchUserData } from "../services/githubService";
import axios from "axios"; 

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1); //pagination
  const perPage = 10; // how many results per page
  const [repoCounts, setRepoCounts] = useState(null);

  const handleSearch = async (e, newPage = 1) => {
    if (e) e.preventDefault();
    if (!username.trim()) {
      setError("Please enter a username");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const results = await fetchUserData({
        username,
        location,
        page: newPage,
        per_page: perPage 
      });

      if (results.length === 0) {
        setUsers([]);
        // console.log(results);
        setError("No users found");
      } else {
        setUsers(results);

        const userRepos = await Promise.all(
          results.map(async (user) => {
            try {
              const res = await axios.get(`https://api.github.com/users/${user.login}`);
              // console.log(res.data.length )
              return { id: user.id, count: res.data.public_repos };
            } catch (error) {
              console.log(`Error fetching repos for ${user.login}`, error);
              return { id: user.id, count: 0 };
            }
          })
        );

        // console.log(userRepos)

        setRepoCounts(userRepos);

        setPage(newPage);
      }
    } catch (error) {
      setError(error.message);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // const repos = await axios.get(users.repos_url)
  //       setRepoCount(repos.length)

  return (
    <div className="query__container">
      <div className="query__heading-blk">
        <h1 className="query__heading">Github User Search</h1>
        <p className="query__txt">
          Browse users and their profiles via the GitHub API
        </p>
      </div>

      <form className="form" onSubmit={handleSearch}>
        <div className="field">
          <input
            className="field__input"
            value={username}
            placeholder="Enter Github username"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="field">
          <input
            className="field__input"
            value={location}
            placeholder="Enter Location"
            type="text"
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <button className="submit-btn" type="submit">
          Search
        </button>
      </form>

      <div className="query__output">
        <h3 className="query__output-heading">Search results</h3>
        {loading && <p> Loading...</p>}
        {error && (
          <p style={{ textAlign: "center" }}>
            {error === "Please enter a username"
              ? error
              : `Looks like we can’t find the user. ${error}`}
          </p>
        )}

        <ol className="links">
          {users.map((user) => {
            const repos = repoCounts?.find((r) => r.id === user.id)?.count ?? "N/A";
            return(
            <li className="link__item" key={user.id}>
              <div className="item-avatar">
                <img
                  className="avatar"
                  src={user.avatar_url}
                  alt="User Avatar"
                />
              </div>

              <div className="item-name-link">
                
                <div className="name-repo-count">
                  <p className="name">{user.login}</p>
                   <p className="repo-count">{repos} Repos</p>
                  </div>
                

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
          )})}
        </ol>

        {/* Pagination */}
        {users.length > 0 && (
          <div className="pagination">
            <button
              className="previous-btn"
              disabled={page === 1}
              onClick={() => handleSearch(null, page - 1)}
            >
              Previous
            </button>
            <span> Page {page} </span>
            <button
              className="next-btn"
              onClick={() => handleSearch(null, page + 1)}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
