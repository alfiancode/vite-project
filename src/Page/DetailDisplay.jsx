import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const DetailDisplay = () => {
  let { id } = useParams();
  const [detailPost, setdetailPost] = useState();
  useEffect(() => {
    // fetch data from api with axios
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://v1.nocodeapi.com/alfian/instagram/jitvaSzDoMhtEJHJ/singleFeed?id=" +
            id
        );
        console.log(response.data);
        setdetailPost(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    // set data to state
  }, []);
  if (!setdetailPost) {
    return <div>loading</div>;
  }
  console.log("data tes");
  return (
    <div>
      {/* title */}
      <h1 className=" text-7xl font-semibold"> Detail Image </h1>
      <div>
        <img
          className="w-64 h-64"
          // scr image
          src={detailPost?.thumbnail_url}
          alt=""
        />
      </div>
      <h1 className=" text-7xl font-semibold">
        {" "}
        Username : {detailPost?.username}{" "}
      </h1>

      {/* description */}
      <p className=" text-7xl font-semibold">
        {" "}
        Description : {detailPost?.caption}{" "}
      </p>
    </div>
  );
};

export default DetailDisplay;
