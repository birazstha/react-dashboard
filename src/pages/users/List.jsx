import { defer, useLoaderData } from "react-router-dom";
import IndexLayout from "../../layouts/IndexLayout";
import axios from "axios";

export default function List() {
  const { friends } = useLoaderData();
  return (
    <>
      <IndexLayout title="User Management" items={friends} />
    </>
  );
}

export async function loadFriends() {
  const headers = {
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  };

  try {
    const res = await axios.get(`${process.env.REACT_APP_URL}/users`, {
      headers,
    });
    if (res.status === 200) {
      return res.data.data;
    }
  } catch (err) {
    console.log(err);
  }
}

export function friendsLoader() {
  return defer({
    friends: loadFriends(),
  });
}
