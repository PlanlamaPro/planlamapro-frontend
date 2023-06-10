import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeRoom, changeStatus } from "../Redux/Slices/roomSlice";

function InvitedRoomCard({ roomData }) {
  const navigator = useNavigate();

  const dispatcher = useDispatch();

  function handleShow() {
    dispatcher(changeRoom({ roomData: roomData }));
    dispatcher(changeStatus({ status: "show" }));
    navigator("/eventroom");
  }

  return (
    <div className="flex flex-col w-76 bg-white	rounded-lg p-2 shadow-2xl">
      <h1 className="font-bold text-2xl">{roomData.roomName}</h1>
      <p className="text-slate-400	italic">{roomData.description}</p>
      <div className="flex flex-row justify-between gap-x-2 mt-2">
        <button
          onClick={handleShow}
          className="bg-blue-500 p-1 rounded-md text-white  font-bold	">
          Görüntüle
        </button>
      </div>
    </div>
  );
}

export default InvitedRoomCard;
