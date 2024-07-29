import axios from "axios";
import { Suspense } from "react";
import { defer, useLoaderData, Await } from "react-router-dom";
const apiUrl = process.env.REACT_APP_URL;

export default function Profile() {
  const { profile } = useLoaderData();
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Await resolve={profile}>
        {(profileData) => (
          <div>
            <h1>{profileData.name}</h1>
          </div>
        )}
      </Await>
    </Suspense>
  );
}

async function loadProfile() {
  const url = `${apiUrl}/profile`;
  const accessToken = localStorage.getItem("accessToken");
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };
  try {
    const res = await axios.get(url, { headers });
    if (res.status === 200) {
      return res.data.data;
    }
  } catch (err) {
    //
  }
}

export function profileLoader1() {
  return defer({
    profile: loadProfile(),
  });
}
