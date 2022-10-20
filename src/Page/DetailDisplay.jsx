import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { db } from "../Config/Firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const DetailDisplay = () => {
  let { id } = useParams();
  const [detailPost, setdetailPost] = useState();
  const [success, setSuccess] = useState(false);
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
  // save data with firebase
  const handleSaveData = async () => {
    try {
      const postsRef = collection(db, "igpost");
      const payload = {
        description: detailPost?.caption,
        createdAt: serverTimestamp(),
        userName: detailPost?.username,
      };
      const addDocFirebase = await addDoc(postsRef, payload);
      addDocFirebase;
      setSuccess(true);

      console.log(detailPost);
    } catch (error) {
      console.log(error);
    }

    // save data to firebase
  };
  if (!detailPost) {
    return <div>loading</div>;
  }

  return (
    <div>
      {/* title */}
      <h1 className=" text-7xl font-semibold"> Detail Image </h1>
      <div>
        <img
          className="w-64 h-64"
          // scr image
          src={detailPost?.thumbnail_url}
          alt="iamge post detail"
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
      {/* link to IG  */}
      <a
        className=" text-7xl font-semibold"
        href={detailPost?.permalink}
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        Link to IG : {detailPost?.permalink}{" "}
      </a>

      {/* big button to save data  */}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => handleSaveData()}
      >
        Save
      </button>
      {/* if success true  */}
      {success && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline">Data has been saved</span>
        </div>
      )}
    </div>
  );
};

export default DetailDisplay;
