import { NavLink } from "react-router-dom";

export default function Sidebar({ menus }) {
  return (
    <ul className="">
      {menus.map((menu) => (
        <li className="text-lg p-1">
          <NavLink
            to={menu.path}
            className={({ isActive }) =>
              ` flex px-5 py-2 text-white ${
                isActive
                  ? "bg-blue-600 p-4  rounded-sm"
                  : "hover:bg-gray-800 duration-200 ease-in-out"
              }
              `
            }
          >
            <div className="flex items-center">
              <i className={`${menu.icon} mr-2 w-[20px]`}></i>

              {menu.title}
            </div>
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
