import Sidebar from "../components/Sidebar";
import { menus } from "../menus";
import { Link, Outlet, redirect, useLoaderData } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
const apiUrl = process.env.REACT_APP_URL;

export default function Master() {
  const { data } = useLoaderData();

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
              <i className="fa fa-user mr-2"></i>
              {data.name}
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

export async function profilerLoader() {
  const url = `${apiUrl}/profile`;
  const accessToken = localStorage.getItem("accessToken");
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  try {
    const res = await axios.get(url, { headers });
    return res.data;
  } catch (err) {
    toast.error("Please login to start your session.");
    return redirect("/login");
  }
}
