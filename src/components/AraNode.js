import React from "react";
import styles from "../styles/nodeStyles.module.css";
import { Handle, Position } from "reactflow";
import Tooltip from "./button";

function AraNode() {
  return (
    <div className={styles.ara_node_container}>
      <Handle
        className={styles.ara_handle_style}
        type="target"
        id="b"
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
      <h1 className={styles.ara_node_header}>Kahvaltı</h1>
      <p className={styles.ara_node_time}>8:15-9:00</p>
      <p className={styles.ara_node_participant}>Katılımcı Sayısı: 25</p>
      <Tooltip classname="button"></Tooltip>
    </div>
  );
}

export default AraNode;
