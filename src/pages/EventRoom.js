import React, { useEffect, useState } from "react";
import Flow from "../components/Flow";
//import Popupform from "../Redux/Aralıkform";
import Form from "../components/Aralıkform";
import { useDispatch, useSelector } from "react-redux";
import AddMemberForm from "../components/AddMemeberForm";
import { addReduxNode, changeIsSaved } from "../Redux/Slices/roomSlice";
import { nanoid } from "@reduxjs/toolkit";

function EventRoom() {
  const dispatcher = useDispatch();

  const [show, setShow] = useState(false);

  const roomData = useSelector((state) => state.rmmSlc.roomData);
  const isFinished = useSelector((state) => state.rmmSlc.isFinished);
  const [member, setMember] = useState(roomData.members.length);

  const status = useSelector((state) => state.rmmSlc.status);
  const newMember = useSelector((state) => state.rmmSlc.newMember);

  function handleShowAddFriendForm() {
    if (status === "edit") {
      setShow(!show);
    }
  }

  function handleEventFinishNode() {
    dispatcher(
      addReduxNode({
        node: {
          id: nanoid().toString(),
          type: "finalEvent",
          position: { x: 120, y: 150 },
        },
      })
    );
  }

  function handleIsSaved() {
    dispatcher(changeIsSaved());
  }

  useEffect(() => {
    setShow(false);
    setMember(member + 1);
  }, [newMember]);
  return (
    <div className="overflow-hidden">
      <div className="room_container flex flex-col bg-[#ffffff] sm:h-[100vh] sm:bg-[#e8ebe9] ">
        <div className="header_content  sm:text-center w-full">
          <div className="room_header flex sm:flex-col justify-between items-center">
            <h1 className="font-bold text-4xl px-4 ">{roomData.roomName}</h1>
            <p className="text-slate-400 text-sm italic pr-4 sm:hidden">
              <p className="font-bold pr-4 sm:pr-0 "></p> Oluşturulma Tarihi:{" "}
              {roomData.createdAt.split("T")[0].split("-").join("/")},{" "}
              {roomData.createdAt
                .split("T")[1]
                .split(":")
                .splice(0, 2)
                .join(":")}
            </p>
          </div>
          <div className="flex flex-row sm:flex-col  justify-between items-center ">
            <p className="room_desc px-4 text-slate-500 sm:hidden ">
              {/* 145 harf */}
              {roomData.description}
            </p>
            <p className="font-bold pr-4 sm:pr-0 ">
              Etkinlik tarihi:{" "}
              {roomData.startDate.split("T")[0].split("-").join("/")}
            </p>
          </div>
        </div>
        <div className="flex sm:flex-col">
          <div className="flex-1">
            <Flow></Flow>
          </div>
          <div className="room_infos flex flex-col bg-[#e8ebe9] sm:pt-4  flex-1 justify-around	">
            {status === "edit" ? (
              <div className="flex flex-col">
                <p className="text-2xl font-bold mb-4 text-center">Düzenle</p>
                <div className="flex flex-col sm:flex-row sm:justify-around">
                  <Form></Form>
                  {isFinished ? (
                    ""
                  ) : (
                    <button
                      onClick={handleEventFinishNode}
                      className="bg-[#e3716d] pt-2 pb-2 pr-10 pl-10 rounded-md text-white font-bold text-lg ml-1 mr-1 hover:bg-[#ad4e4b] transition ease-in-out">
                      Etkinlik Bitişi
                    </button>
                  )}
                </div>
              </div>
            ) : (
              ""
            )}

            <div className="mt-8 flex flex-col  items-stretch">
              <AddMemberForm isshow={show}></AddMemberForm>
              <p className="text-2xl font-bold mb-4 text-center ">Bilgiler</p>
              <div className="flex flex-col sm:flex-row sm:justify-around">
                <button
                  onClick={handleShowAddFriendForm}
                  className="bg-[#abb8f5] pt-2 pb-2 mb-2 sm:mb-0 pr-10 pl-10 ml-1 mr-1 rounded-md text-white font-bold text-lg  hover:bg-[#6e7bba] transition ease-in-out">
                  Odadaki Kişiler: {member}
                </button>
                <button className="bg-[#9ee7ff] pt-2 pb-2 pr-10 pl-10 ml-1 mr-1 rounded-md text-white font-bold text-lg  hover:bg-[#66b8d4] transition ease-in-out">
                  Anılar
                </button>
              </div>
            </div>
            <div className="mt-8 flex flex-col  items-stretch">
              {status === "edit" ? (
                <button
                  onClick={handleIsSaved}
                  className="bg-[#81ebbf] pt-2 sm:mb-1 pb-2 pr-10 pl-10 ml-1 mr-1 rounded-md text-white font-bold text-lg  hover:bg-[#57b58e] transition ease-in-out">
                  Odayı Kaydet
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventRoom;
