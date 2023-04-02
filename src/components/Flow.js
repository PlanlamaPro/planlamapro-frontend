import React from "react";
import ReactFlow, { Controls /*Background*/ } from "reactflow";
import "reactflow/dist/style.css";
import { useState, useCallback } from "react";
import { applyEdgeChanges, applyNodeChanges, addEdge } from "reactflow";
import StartNode from "./StartNode";
import AraNode from "./AraNode";
import FinalNode from "./FinalNode";
import AraNode2 from "./AraNode2";
import Popup from "reactjs-popup";
//import styled, {ThemeProvider} from 'styled-components'

const initialNodes = [
  {
    id: "node-1",
    type: "startEvent",
    position: { x: -150, y: 50 },
    data: { value: 123 },
  },
  {
    id: "node 2",
    type: "araNode",
    position: { x: 0, y: 30 },
    data: { value: 123 },
  },
  {
    id: "node 3",
    type: "araNode2",
    position: { x: -50, y: 150 },
    data: { value: 123 },
  },
  {
    id: "node 4",
    type: "finalEvent",
    position: { x: 120, y: 150 },
    data: { value: 123 },
  },
];

const rfStyle = {
  backgroundColor: "#b1e1fc",
};

const initialEdges = [];
const Tooltip = () => (
  <Popup
    trigger={(open) => (
      <araNode className="araNode">{open ? "Opened" : "Closed"}</araNode>
    )}>
    <span>Katilimci Sayisi</span>
  </Popup>
);

const nodeTypes = {
  startEvent: StartNode,
  araNode: AraNode,
  finalEvent: FinalNode,
  araNode2: AraNode2,
};

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
    <div className="w-[80vw] sm:w-[100vw] h-[92vh] sm:h-[40vh] ">
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
        {/* <Background />*/}
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default Flow;
