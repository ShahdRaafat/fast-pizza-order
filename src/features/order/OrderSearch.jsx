import { useState } from "react";
import { useNavigate } from "react-router-dom";

function OrderSearch() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Order by ID"
      />
    </form>
  );
}

export default OrderSearch;
