import useRecipeStore from "./recipeStore";
import "./AddRecipeForm.css";

function SearchBar() {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      style={{ 
        padding: "0.5% 1.3%",
        width: "15%",
        fontSize: "1.6rem",
        borderRadius: '0.5rem 0rem 0 0.5rem',
        border: " none",
        outline: "none",
        background: '#f2f2f2'
      }}
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}

export default SearchBar;
