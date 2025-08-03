import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function OrderSearch() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Order #"
        className="h-10 w-28 rounded-full border-primary bg-red-300 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-500 focus:outline-none focus:ring focus:ring-red-950 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
      />
    </form>
  );
}

export default OrderSearch;
