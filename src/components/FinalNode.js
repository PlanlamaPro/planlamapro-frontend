import React from "react";
import styles from "../styles/nodeStyles.module.css";
import { Handle, Position } from "reactflow";

function FinalNode() {
  return (
    <div className={styles.final_node_container}>
      <Handle
        className={styles.final_handle_style}
        type="target"
        id="d"
        isConnectable={true}
        position={Position.Left}
      />
      <h1 className={styles.final_node_header}>Etkinlik Bitişi</h1>
    </div>
  );
}

export default FinalNode;