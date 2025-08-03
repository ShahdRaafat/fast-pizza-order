import { Link } from 'react-router-dom';
import OrderSearch from '../features/order/OrderSearch';
import Username from '../features/user/Username';
function Header() {
  return (
    <header className="border-b border-stone-100 bg-primary px-4 py-4 uppercase text-stone-100 sm:px-6 flex items-center justify-between">
      <Link to="/" className="uppercase tracking-widest">
        Fast Pizza Order Co.
      </Link>
      <OrderSearch />
      <Username />
    </header>
  );
}

export default Header;
