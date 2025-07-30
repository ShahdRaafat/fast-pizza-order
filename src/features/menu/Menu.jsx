import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "../menu/MenuItem";
function Menu() {
  const menu = useLoaderData();
  return (
    <>
      <h1>Menu</h1>

      <ul>
        {menu.map((pizza) => (
          <MenuItem pizza={pizza} key={pizza.id} />
        ))}
      </ul>
    </>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}
export default Menu;
