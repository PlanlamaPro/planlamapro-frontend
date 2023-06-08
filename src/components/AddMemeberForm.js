import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeNewMember } from "../Redux/Slices/roomSlice";

function CreateForm({ onClose }) {
  const [username, setUsername] = useState("");

  const roomData = useSelector((state) => state.rmmSlc.roomData);

  const dispatcher = useDispatch();

  const handleUserNameChange = (event) => {
    setUsername(event.target.value);
  };

  async function handleAddMember() {
    const creator = await localStorage.getItem("userId");

    const data = {
      username: username,
      roomId: roomData._id,
    };

    const token = await localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    await axios
      .post("http://localhost:5000/room/inviteMember", data, config)
      .then((response) => {
        toast.success("Yeni üye başarıyla eklendi", {
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
          dispatcher(changeNewMember());
        }, 3000);
      })
      .catch((error) => {
        toast.error("Böyle bir kullanıcı bulunmamaktadır ya da Zaten Eklendi", {
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
                  Kullanıcı Adı(Username):
                </label>
                <input
                  id="username"
                  type="text"
                  className="border-2 border-slate-800 p-2 w-full"
                  value={username}
                  onChange={handleUserNameChange}
                />
              </div>
              <div className="flex justify-end">
                <button
                  onClick={handleAddMember}
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

function AddMemberForm({ isshow }) {
  const navigator = useNavigate();
  const [showForm, setShowForm] = useState(isshow);

  const handleClose = () => {
    setShowForm(false);
  };

  useEffect(() => {
    setShowForm(isshow);
  }, [isshow]);

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
export default AddMemberForm;
