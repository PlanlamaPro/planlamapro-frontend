import React from "react";
import styles from "../styles/nodeStyles.module.css";
import { Handle, Position } from "reactflow";

function AraNode2() {
  return (
    <div className={styles.ara_node_container}>
      <Handle
        className={styles.ara_handle_style}
        type="target"
        id="c"
        isConnectable={true}
        position={Position.Left}
      />
      <Handle
      className={styles.ara_handle_style}
        type="source"
        id="b"
        isConnectable={true}
        position={Position.Right}
      />
      <h1 className={styles.ara_node_header}>Seminer</h1>
      <p className={styles.ara_node_time}>9:00-11:00</p>
      <p className={styles.ara_node_participant}>Katılımcı Sayısı: 50</p>
    </div>
  );
}

export default AraNode2;
