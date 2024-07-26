import Sidebar from "./Sidebar";
import { menus } from "../menus";
import { Link, Outlet } from "react-router-dom";
import SearchField from "./SearchField";

export default function Master() {
  return (
    <>
      <div className="min-h-screen mx-auto flex h-full">
        <div className="bg bg-[#353535] w-[420px]">
          <div className="flex items-center justify-center p-3 mb-2 h-[60px] border-b border-gray-500">
            <p className="font-bold text-2xl text-white ">
              <Link to="/">FRIENDS MANAGEMENT</Link>
            </p>
          </div>
          <Sidebar menus={menus} />
        </div>
        <div className="w-full ">
          <div className="p-3 h-[60px] flex items-center justify-between ">
            <ul className="flex gap-3">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Contacts</a>
              </li>
            </ul>
            <div>
              <SearchField />
            </div>
          </div>
          <div className="p-3 bg-[#ebeaea] min-h-screen">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
