import React from "react";
import styles from "../styles/eventRoomStyles.module.css";
import Flow from "../components/Flow";

function EventRoom() {
  return (
    <div>
      <div className="room_container flex flex-col ">
        <div className="header_content  w-full">
          <div className="room_header flex justify-between items-center">
            <h1 className="font-bold text-4xl px-4">Benim Odam</h1>
            <p className="text-slate-400 text-sm italic pr-4">
              Oluşturulma Tarihi: 31/03/2023, 9:23
            </p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <p className="room_desc px-4 text-slate-500 ">
              {/* 145 harf */}
              Bu oda sadece deneme amacı ile oluşturulmuştur. Şuan için bir
              amacı bulnmamaktadır
            </p>
            <p className="font-bold pr-4">Etkinlik tarihi: 05/04/2023</p>
          </div>
        </div>
        <div className="flex">
          <div className="flex-1">
            <Flow></Flow>
          </div>
          <div className="room_infos flex flex-col bg-[#e1eafc33] flex-1 justify-around	">
            <div className="flex flex-col ">
              <p className="text-2xl font-bold mb-4 text-center">Düzenle</p>
              <button className="bg-[#54c776] pt-2 pb-2 pr-10 pl-10 mb-2 rounded-md text-white font-bold text-lg ml-1 mr-1 hover:bg-[#41a65f] transition ease-in-out ">
                Aralık Ekle
              </button>
              <button className="bg-[#e3716d] pt-2 pb-2 pr-10 pl-10 rounded-md text-white font-bold text-lg ml-1 mr-1 hover:bg-[#ad4e4b] transition ease-in-out">
                Etkinlik Bitişi
              </button>
            </div>

            <div className="mt-8 flex flex-col  items-stretch">
              <p className="text-2xl font-bold mb-4 text-center">Bilgiler</p>

              <button className="bg-[#abb8f5] pt-2 pb-2 mb-2 pr-10 pl-10 ml-1 mr-1 rounded-md text-white font-bold text-lg  hover:bg-[#6e7bba] transition ease-in-out">
                Odadaki Kişiler: 42
              </button>
              <button className="bg-[#9ee7ff] pt-2 pb-2 pr-10 pl-10 ml-1 mr-1 rounded-md text-white font-bold text-lg  hover:bg-[#66b8d4] transition ease-in-out">
                Anılar
              </button>
            </div>
            <div className="mt-8 flex flex-col  items-stretch">
              <button className="bg-[#81ebbf] pt-2 pb-2 pr-10 pl-10 ml-1 mr-1 rounded-md text-white font-bold text-lg  hover:bg-[#57b58e] transition ease-in-out">
                Odayı Kaydet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventRoom;
