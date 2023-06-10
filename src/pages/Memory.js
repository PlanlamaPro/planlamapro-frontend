import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Comment from "../components/comment";
import { AiOutlineSend } from "react-icons/ai";
import { RiGalleryUploadLine } from "react-icons/ri";
import axios from "axios";

function Memory() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const roomData = useSelector((state) => state.rmmSlc.roomData);
  const status = useSelector((state) => state.rmmSlc.status);

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  function handleImgUpload() {
    // Gerekli parametreleri ayarlayın
    // const formData = new FormData();
    // formData.append("roomId", "123"); // roomId değerini ayarlayın
    // formData.append("file", file); // file değerini ayarlayın
    // // POST isteğini gönderin
    // axios
    //   .post("/upload-image", formData)
    //   .then((response) => {
    //     console.log(response.data);
    //     // İstek başarılı oldu
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     // İstek sırasında bir hata oluştu
    //   });
  }

  function handleSendComment() {
    const commentData = {
      content: comment,
      author: localStorage.getItem("username"),
      roomId: roomData._id,
    };

    const token = localStorage.getItem("token");

    const headers = {
      Authorization: `Bearer ${token}`, // JWT token'ınızı Authorization başlığına ekleyin
      "Content-Type": "application/json", // İçerik türünü belirtin
    };

    const config = {
      headers: headers,
    };

    const apiUrl = "http://localhost:5000/comment/uploadComment"; // API URL'sini buraya yerleştirin

    axios
      .post(apiUrl, commentData, config)
      .then((response) => {
        setComment("");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    const roomPostData = {
      roomId: roomData._id,
    };

    const token = localStorage.getItem("token");

    const headers = {
      Authorization: `Bearer ${token}`, // JWT token'ınızı Authorization başlığına ekleyin
      "Content-Type": "application/json", // İçerik türünü belirtin
    };

    const config = {
      headers: headers,
    };

    const apiUrl = "http://localhost:5000/comment/getroomComment"; // API URL'sini buraya yerleştirin

    axios
      .post(apiUrl, roomPostData, config)
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <div className="fixed left-0 w-[30vw] h-[100vh] bg-white overflow-y-auto overflow-x-hidden">
        <div className="fixed w-[28.9vw] text-center bg-white pt-2 pb-2">
          <h1 className="font-bold text-4xl ">Yorumlar</h1>
          <hr className="mr-16 mt-2 ml-16 border-2 border-black"></hr>
        </div>
        <div className="fixed py-4  justify-center gap-x-1 w-[29vw] bg-white flex flex-row mt-12 bottom-0">
          <input
            className=" bg-slate-200 focus:outline-sky-500 rounded-md p-2  w-[20vw]"
            placeholder="Yorumunuzu Giriniz..."
            type="text"
            id="comment"
            value={comment}
            onChange={handleCommentChange}
            name="comment"></input>
          <button
            onClick={handleSendComment}
            className="bg-green-600 rounded-xl px-4 py-2">
            <AiOutlineSend color="white" fontWeight={12}></AiOutlineSend>
          </button>
          {status === "edit" ? (
            <button
              onClick={handleImgUpload}
              className="bg-sky-600 rounded-xl px-4 py-2">
              <RiGalleryUploadLine
                color="white"
                fontWeight={12}></RiGalleryUploadLine>
            </button>
          ) : (
            ""
          )}
        </div>

        <div className="mt-20">
          {comments.length > 0 ? (
            comments.map((com) => {
              return <Comment data={com} key={com._id}></Comment>;
            })
          ) : (
            <p className="text-center font-bold text-rose-700 text-2xl">
              Hiç yorum bulunmamaktadır
            </p>
          )}
        </div>
      </div>
      <div className="fixed flex flex-row justify-center items-center right-0 w-[70vw] h-[100vh]">
        <h1 className="text-rose-800 font-bold text-4xl ">
          Resim Bulunmamaktadır
        </h1>
      </div>
    </div>
  );
}

export default Memory;
