import { NavLink } from "react-router-dom";

export default function Sidebar({ menus }) {
  return (
    <ul className="">
      {menus.map((menu) => (
        <li className="text-lg px-2 py-1">
          <NavLink
            to={menu.path}
            className={({ isActive }) =>
              ` flex px-5 py-2 text-white rounded-md ${
                isActive
                  ? "bg-blue-600 p-4 "
                  : "hover:bg-gray-600 duration-200 ease-in-out"
              }
              `
            }
          >
            <div className="flex items-center">
              <i className={`${menu.icon} mr-2 w-[22px]`}></i>
              {menu.title}
            </div>
          </NavLink>
        </li>
      ))}
     
    </ul>
  );
}
