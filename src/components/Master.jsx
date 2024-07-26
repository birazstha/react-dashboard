import Sidebar from "./Sidebar";
import { menus } from "../menus";
import { Link, Outlet } from "react-router-dom";

export default function Master() {
  return (
    <>
      <div className="min-h-screen mx-auto flex h-full">
        <div className="bg bg-[#353535] w-[420px]">
          <div className="flex items-center justify-center p-3 mb-2 h-[80px] border-b border-white">
            <p className="font-bold text-2xl text-white ">
              <Link to="/">FRIENDS MANAGEMENT</Link>
            </p>
          </div>
          <Sidebar menus={menus} />
        </div>
        <div className="w-full ">
          <div className="p-3 h-[80px] flex items-center justify-between">
            <ul className="flex gap-3">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Contacts</a>
              </li>
            </ul>
            <div>
              <input
                type="text"
                className="p-2 bg-[#ededed] h-[35px] rounded-md shadow-sm bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />

              <button>Search</button>
            </div>
          </div>
          <div className="p-3">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
