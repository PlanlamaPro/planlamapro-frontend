import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import {
  changeEdges,
  changeNodes,
  changeRoom,
  changeStatus,
} from "../Redux/Slices/roomSlice";
import axios from "axios";
import { useState } from "react";

function RoomCard({ roomData }) {
  const navigator = useNavigate();
  const dispatcher = useDispatch();

  const [isThere, setThere] = useState(true);

  function handleEdit() {
    dispatcher(changeRoom({ roomData: roomData }));
    dispatcher(changeStatus({ status: "edit" }));
    navigator("/eventroom");
  }

  function handleDelete() {
    changeRoom({ roomData: {} });
    changeNodes({ nodes: [] });
    changeEdges({ edges: [] });

    const roomId = roomData._id;
    const token = localStorage.getItem("token");

    axios
      .delete("http://localhost:5000/room/deleteroom", {
        data: { roomId },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        // İşlem başarılıysa burada gelen veriyi kullanabilirsiniz
      })
      .catch((error) => {
        console.error(error);
        // Hata durumunda burada hatayı işleyebilirsiniz
      });

    setThere(false);
    toast.success("Oda Başarıyla Silindi", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {isThere ? (
        <div className="flex flex-col w-76 bg-white	rounded-lg p-2 shadow-2xl">
          <h1 className="font-bold text-2xl">{roomData.roomName}</h1>
          <p className="text-slate-400	italic">{roomData.description} </p>
          <div className="flex flex-row justify-between gap-x-2 mt-2">
            <button
              onClick={handleEdit}
              className="bg-yellow-500 p-1 rounded-md text-white  font-bold	">
              Düzenle
            </button>

            <button
              onClick={handleDelete}
              className="bg-red-500 p-1 rounded-md text-white font-bold	">
              Sil
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default RoomCard;
