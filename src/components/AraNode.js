import React from "react";
import styles from "../styles/nodeStyles.module.css";
import { Handle, Position } from "reactflow";
import Tooltip from "./button";

function AraNode({ data }) {
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
      <h1 className={styles.ara_node_header}>{data.header}</h1>
      <p className={styles.ara_node_time}>{data.startHour}</p>
      {data.description.length > 0 ? (
        <Tooltip classname="button" desc={data.description}></Tooltip>
      ) : (
        ""
      )}
    </div>
  );
}

export default AraNode;
