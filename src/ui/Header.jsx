import { Link } from "react-router-dom";
import OrderSearch from "../features/order/OrderSearch";
function Header() {
  return (
    <header>
      <Link to="/">Return to home</Link>
      <OrderSearch />
      <p>Shahoud</p>
    </header>
  );
}

export default Header;
