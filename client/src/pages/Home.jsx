import React, { useEffect } from "react";
import { config } from "../config";
import useAuthContext from "../hooks/useAuthContext";
import useUrlContext from "../hooks/useUrlsContext";

const Home = () => {
  const { dispatch, urls } = useUrlContext();
  const { user } = useAuthContext();

  // set urls
  const getURLs = async () => {
    const res = await fetch(`${config.baseUrl}/api/links`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    const jsonData = await res.json();
    console.log("jsonData :", jsonData);

    if (res.ok) {
      dispatch({
        type: "SET_URLS",
        payload: jsonData,
      });
    }
  };

  useEffect(() => {
    if (user) {
      getURLs();
    }
  }, [user]);
  console.log(urls);

  return (
    <>
      <section className="bg-blue-200 min-h-screen">
        {urls?.map((item, index) => {
          return <p key={index}>{item?.original_url}</p>;
        })}
      </section>
    </>
  );
};

export default Home;
