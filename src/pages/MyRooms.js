import React, { useEffect, useState } from "react";
import RoomCard from "../components/RoomCard";
import InvitedRoomCard from "../components/InvitedRoomCard";
import axios from "axios";
import { useDispatch } from "react-redux";
import { changeNodes } from "../Redux/Slices/roomSlice";
import { nanoid } from "@reduxjs/toolkit";

function MyRooms() {
  const [rooms, setRooms] = useState([]);
  const [invitedRooms, setInvitedRooms] = useState([]);

  const dispatcher = useDispatch();

  useEffect(() => {
    dispatcher(
      changeNodes({
        nodes: [
          {
            id: nanoid(),
            type: "startEvent",
            position: { x: 150, y: -50 },
          },
        ],
      })
    );

    // JWT token'ınızı alın veya oluşturun
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    const postData = {
      creatorId: userId,
    };

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    //for owned rooms
    axios
      .post("http://localhost:5000/room/getbyowner", postData, config)
      .then((response) => {
        setRooms(response.data);
      })
      .catch((error) => {
        console.error("İstek sırasında bir hata oluştu:", error);
      });

    //for invited rooms
    const postTwoData = {
      userId: userId,
    };
    axios
      .post("http://localhost:5000/room/getinvitedrooms", postTwoData, config)
      .then((response) => {
        setInvitedRooms(response.data);
      })
      .catch((error) => {
        console.error("İstek sırasında bir hata oluştu:", error);
      });
  }, []);

  return (
    <div className="max-w-3xl ml-16">
      <div className="pt-8">
        <h1 className="font-bold text-4xl">Benim Odalarım</h1>
        <hr className="border-2 border-black mb-4"></hr>
        <div className="flex flex-row gap-x-4">
          {rooms.length === 0 ? (
            <h1 className="text-2xl text-rose-900 font-bold ">
              Hiçbir odanız bulunmamaktadır.
            </h1>
          ) : (
            rooms.map((room) => (
              <RoomCard roomData={room} key={room._id}></RoomCard>
            ))
          )}
        </div>
      </div>
      <div className="pt-8">
        <h1 className="font-bold text-4xl">Davet Edildiğim Odalar</h1>
        <hr className="border-2 border-black mb-4"></hr>
        <div className="flex flex-row gap-x-4">
          {invitedRooms.length === 0 ? (
            <h1 className="text-2xl text-rose-900 font-bold ">
              DavetEdildiğiniz oda bulunmamaktadır.
            </h1>
          ) : (
            invitedRooms.map((room) => (
              <InvitedRoomCard roomData={room} key={room._id}></InvitedRoomCard>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default MyRooms;
