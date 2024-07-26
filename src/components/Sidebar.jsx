import { NavLink } from "react-router-dom";

export default function Sidebar({ menus }) {
  return (
    <ul className="">
      {menus.map((menu) => (
        <li className="text-lg">
          <NavLink
            to={menu.path}
            className={({ isActive }) =>
              ` flex px-5 py-2 text-white ${
                isActive
                  ? "bg-blue-600  rounded-sm"
                  : "hover:bg-gray-800 duration-300 ease-in-out"
              }
              `
            }
          >
            {menu.title}
          </NavLink>
        </li>
      ))}
      {/* 
      <li className="px-5 py-2 text-white text-lg hover:bg-gray-800 duration-300">
        <NavLink to="/friends">Friends</NavLink>
      </li> */}
    </ul>
  );
}
