import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function CreateForm({ onClose }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");

  const navigator = useNavigate();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  async function handleCreateRoom() {
    const date = time.split("-").join("-");
    const creator = await localStorage.getItem("userId");

    const data = {
      roomName: title,
      startDate: date,
      description: description,
      creatorId: creator,
    };
    const token = await localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    await axios
      .post("http://localhost:5000/room/createRoom", data, config)
      .then((response) => {
        toast.success("Oda başarıyla oluşturuldu", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(function () {
          navigator("/mainpage");
        }, 3000);
      })
      .catch((error) => {
        toast.error(error.response.data, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
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
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen">
          <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-md w-full">
            <div className="p-4">
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-gray-700 font-bold mb-2">
                  Oda Başlığı
                </label>
                <input
                  id="title"
                  type="text"
                  className="border-gray-400 p-2 w-full"
                  value={title}
                  onChange={handleTitleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-gray-700 font-bold mb-2">
                  Oda Açıklaması
                </label>
                <textarea
                  id="description"
                  className="border-gray-400 p-2 w-full"
                  value={description}
                  onChange={handleDescriptionChange}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="time"
                  className="block text-gray-700 font-bold mb-2">
                  Oda Etkinlik Tarihi
                </label>
                <input
                  id="time"
                  type="date"
                  className="border-gray-400 p-2 w-full"
                  value={time}
                  onChange={handleTimeChange}
                />
              </div>
              <div className="flex justify-end">
                <button
                  onClick={handleCreateRoom}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold rounded-md text-lg py-2 px-4 mr-2">
                  Kaydet
                </button>
                <button
                  className="bg-gray-400 hover:bg-gray-500 text-white font-bold rounded-md text-lg py-2 px-4"
                  type="button"
                  onClick={onClose}>
                  Kapat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function RoomCreateForm() {
  const navigator = useNavigate();
  const [showForm, setShowForm] = useState(true);

  const handleClose = () => {
    navigator("/mainpage");
  };

  return (
    <>
      <div>
        {showForm && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div
              className="flex items-center justify-center min-h-screen"
              style={{ backdropFilter: "blur(3px)" }}>
              <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-md w-full">
                <div className="p-4">
                  <CreateForm onClose={handleClose} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default RoomCreateForm;
