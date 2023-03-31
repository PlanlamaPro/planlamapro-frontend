import React from "react";
import styles from "../styles/eventRoomStyles.module.css";
import Flow from "../components/Flow";

function EventRoom() {
  return (
    <div>
      <div className="room_container">
        <div className="header_content">
          <div className="room_header">Benim odam</div>
          <div className="room_desc">
            Bu odayı bem şuanlık sadece deneme amacıyla oluşturdum. herhangi bir
            amacı yok
          </div>
        </div>
        <Flow></Flow>
      </div>
      <div className="room_infos"></div>
    </div>
  );
}

export default EventRoom;
