import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { data } from "autoprefixer";
const DisplayImage = () => {
  const navigate = useNavigate();
  let { total } = useParams();
  const [dataPost, setdataPost] = useState();
  console.log(total);
  // useeffect to get data from api
  useEffect(() => {
    // fetch data from api with axios
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://v1.nocodeapi.com/alfian/instagram/jitvaSzDoMhtEJHJ?limit=" +
            total
        );
        console.log(response.data);
        setdataPost(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    // set data to state
  }, []);
  // navigate to detail
  const onClicked = (id) => {
    navigate("/display/" + id);
  };
  if (!dataPost) {
    return <div>loading</div>;
  }

  // console.log("datates", dataPost.data?.[0]?.media_url);
  return (
    <div>
      <h1 className=" text-7xl font-semibold"> list of image </h1>
      {/* Show images in a grid  */}
      <div className="grid grid-cols-3 gap-4">
        {/* maaping data from dataPost */}

        {dataPost.data?.map((item, index) => {
          return (
            <div>
              <img
                onClick={() => {
                  onClicked(item.id);
                }}
                className="w-64 h-64"
                // scr image
                src={item?.thumbnail_url}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayImage;
