import React from "react";
import styles from "../styles/nodeStyles.module.css";
import { Handle, Position } from "reactflow";

function StartNode() {
  return (
    <div className={styles.start_node_container}>
      <Handle
        className={styles.start_handle_style}
        type="source"
        id="a"
        isConnectable={true}
        position={Position.Right}
      />
      <h1 className={styles.start_node_header}>Etkinlik Başlangıcı</h1>
    </div>
  );
}

export default StartNode;
