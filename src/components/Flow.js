import React from "react";
import ReactFlow, { Controls, Background } from "reactflow";
import "reactflow/dist/style.css";
import { useState, useCallback } from "react";
import { applyEdgeChanges, applyNodeChanges, addEdge } from "reactflow";
import StartNode from "./StartNode";

const initialNodes = [
  {
    id: "node-1",
    type: "startEvent",
    position: { x: 0, y: 0 },
    data: { value: 123 },
  },
  {
    id: "node-2",
    position: { x: 0, y: 0 },
    data: { label: "Öylesine" },
  },
];

const rfStyle = {
  backgroundColor: "#FFFFFF",
};

const initialEdges = [];

const nodeTypes = { startEvent: StartNode };

function Flow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const edgeOptions = {
    animated: true,
    style: {
      stroke: "black",
    },
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        style={rfStyle}
        defaultEdgeOptions={edgeOptions}
        fitView
        nodeTypes={nodeTypes}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}>
        {/* <Background /> */}
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default Flow;
