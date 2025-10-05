import "./Search.css";
import { useState } from "react";
import { searchUsers } from "../services/githubService";

function Search() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;
    try {
      const results = await searchUsers(query);
      setUsers(results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="query__container">
      <div className="query__heading-blk">
        <h1 className="query__heading">Github User Search</h1>
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
        <ol className="links">
          
          {users && users.map((user) => (
            <li className="link__item" key={user.id}>
              <a
                className="link"
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
              >
                {user.login}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Search;
