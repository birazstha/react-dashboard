import Sidebar from "./Sidebar";
import { menus } from "../menus";
import { Link, Outlet } from "react-router-dom";

export default function Master() {
  return (
    <div className="min-h-screen mx-auto flex h-full">
      <div className="bg bg-[#353535] w-[420px]">
        <div className="flex items-center justify-center p-3">
          <p className="font-bold text-2xl text-white ">
            <Link to="/">FRIENDS MANAGEMENT</Link>
          </p>
        </div>
        <Sidebar menus={menus} />
      </div>
      <div className="border-2 border-green-800 w-full p-4">
        <Outlet />
      </div>
    </div>
  );
}
