import React from "react";
import ReactFlow, { Controls /*Background*/ } from "reactflow";
import "reactflow/dist/style.css";
import { useState, useCallback } from "react";
import { applyEdgeChanges, applyNodeChanges, addEdge } from "reactflow";
import StartNode from "./StartNode";
import AraNode from "./AraNode";
import FinalNode from "./FinalNode";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

import {
  changeEdges,
  changeIsSaved,
  changeNodes,
  changeIsFinished,
} from "../Redux/Slices/roomSlice";
import axios from "axios";

const nodeTypes = {
  startEvent: StartNode,
  araNode: AraNode,
  finalEvent: FinalNode,
};

const edgeOptions = {
  animated: true,
  style: {
    stroke: "black",
  },
};

function Flow() {
  const dispatcher = useDispatch();
  const initialNodes = useSelector((state) => state.rmmSlc.nodes);
  const initialEdges = useSelector((state) => state.rmmSlc.edges);

  const roomData = useSelector((state) => state.rmmSlc.roomData);
  const status = useSelector((state) => state.rmmSlc.status);

  const isSaved = useSelector((state) => state.rmmSlc.isSaved);

  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  useEffect(() => {
    const jwtToken = localStorage.getItem("token");

    const nodeData = {
      roomId: roomData._id,
    };

    axios
      .post("http://localhost:5000/edges/getroomedges", nodeData, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      .then((response) => {
        if (response.data.length > 0) {
          setEdges(response.data);
          dispatcher(changeNodes({ edges: response.data }));
        }
      })
      .catch((error) => {});

    axios
      .post("http://localhost:5000/node/getroomnodes", nodeData, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      .then((response) => {
        const formattedNodes = [];

        response.data.map((node) => {
          if (node.status === "startEvent") {
            formattedNodes.push({
              id: node.id,
              type: node.state,
              position: node.positionAbsolute,
            });
          } else if (node.status === "finalEvent") {
            formattedNodes.push({
              id: node.id,
              type: node.state,
              position: node.positionAbsolute,
            });
            if (status !== "edit") {
              dispatcher(changeIsFinished({ isFinished: true }));
            }
          } else {
            formattedNodes.push({
              id: node.id,
              type: node.state,
              data: {
                header: node.header,
                description: node.description,
                startHour: node.startHour,
              },
              position: node.positionAbsolute,
            });
          }
        });

        if (formattedNodes.length > 0) {
          setNodes(formattedNodes);
          dispatcher(changeNodes({ nodes: formattedNodes }));
        }
      })
      .catch((error) => {});
  }, []);

  useEffect(() => {
    setNodes(initialNodes);
    dispatcher(changeEdges({ edges: edges }));
  }, [initialNodes, edges]);

  useEffect(() => {
    if (isSaved) {
      const jwtToken = localStorage.getItem("token");
      if (status === "edit") {
        axios
          .post(
            "http://localhost:5000/node/deletenodes",
            { roomId: roomData._id },
            {
              headers: {
                Authorization: `Bearer ${jwtToken}`,
              },
            }
          )
          .then((response) => {
            console.log("Node'lar silindi");
          })
          .catch((error) => {
            console.log("Node'lar silinirken hata oluştu");
          });

        axios
          .post(
            "http://localhost:5000/edges/deleteedges",
            { roomId: roomData._id },
            {
              headers: {
                Authorization: `Bearer ${jwtToken}`,
              },
            }
          )
          .then((response) => {
            console.log("Edge'ler silindi");
          })
          .catch((error) => {
            console.log("Edge'ler silinirken hata oluştu");
          });
      }

      nodes.map(async (node) => {
        if (node.type === "startEvent") {
          const nodeData = {
            id: node.id,
            header: "Bitiş Başlangıç",
            description: "",
            positionAbsolute: node.position,
            state: node.type,
            startHour: "12:00",
            roomId: roomData._id,
          };

          // Axios POST isteği gönderme
          await axios
            .post("http://localhost:5000/node/addNode", nodeData, {
              headers: {
                Authorization: `Bearer ${jwtToken}`,
              },
            })
            .then((response) => {
              console.log("Node başarıyla kaydedildi:", response.data);
            })
            .catch((error) => {
              console.error("Node kaydedilirken bir hata oluştu:", error);
            });
        } else if (node.type === "finalEvent") {
          const nodeData = {
            id: node.id,
            header: "Bitiş Başlangıç",
            description: "",
            positionAbsolute: node.position,
            state: node.type,
            startHour: "12:00",
            roomId: roomData._id,
          };

          // Axios POST isteği gönderme
          await axios
            .post("http://localhost:5000/node/addNode", nodeData, {
              headers: {
                Authorization: `Bearer ${jwtToken}`,
              },
            })
            .then((response) => {
              console.log("Node başarıyla kaydedildi:", response.data);
            })
            .catch((error) => {
              console.error("Node kaydedilirken bir hata oluştu:", error);
            });
        } else {
          const nodeData = {
            id: node.id,
            header: node.data.header,
            description: node.data.description,
            positionAbsolute: node.position,
            state: node.type,
            startHour: node.data.startHour,
            roomId: roomData._id,
          };

          // JWT token'ınızı bir değişkende saklayın

          // Axios POST isteği gönderme
          await axios
            .post("http://localhost:5000/node/addNode", nodeData, {
              headers: {
                Authorization: `Bearer ${jwtToken}`,
              },
            })
            .then((response) => {
              console.log("Node başarıyla kaydedildi:", response.data);
            })
            .catch((error) => {
              console.error("Node kaydedilirken bir hata oluştu:", error);
            });
        }
      });

      edges.map(async (edge) => {
        const edgeData = {
          id: edge.id,
          animated: true,
          source: edge.source,
          sourceHandle: edge.sourceHandle,
          target: edge.target,
          targetHandle: edge.targetHandle,
          roomId: roomData._id,
        };

        // JWT token
        const token = localStorage.getItem("token");

        // Axios POST isteği
        await axios
          .post("http://localhost:5000/edges/saveEdge", edgeData, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            console.log("Edge başarıyla kaydedildi.");
            // İsteğe yanıtla ilgili işlemleri yapabilirsiniz
          })
          .catch((error) => {
            console.error("Edge kaydedilirken bir hata oluştu:", error);
            // Hata durumunda ilgili işlemleri yapabilirsiniz
          });
      });
      dispatcher(changeIsSaved());
      toast.success("Oda Kaydedildi", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [isSaved]);

  console.log(status);

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

  const rfStyle = {
    backgroundColor: "#b1e1fc",
  };

  return (
    <div className="w-[80vw] sm:w-[100vw] h-[92vh] sm:h-[40vh] ">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
