import React from "react";

import useFetch from "../customHooks/useFetch";

const CustomHookPage = () => {
  //custom hooks
  const BASE_URL = "https://inshortsapi.vercel.app/news?category=all";
  const { data, loading, error } = useFetch(BASE_URL);
  //   console.log(data[0].author);
  return (
    <div>
      <h3> custome hook</h3>
      <div> {loading && <p>loading....</p>} </div>
      <div> {data && data.map((item) => <p>{item.author}</p>).slice(1,4)} </div>
    </div>
  );
};

export default CustomHookPage;
