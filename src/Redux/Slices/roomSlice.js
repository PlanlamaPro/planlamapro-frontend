import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

export const roomSlice = createSlice({
  name: "rmmSlc",
  initialState: {
    roomData: {},
    status: "",
    newMember: false,
    nodes: [
      {
        id: nanoid(),
        type: "startEvent",
        position: { x: 150, y: -50 },
      },
    ],
    edges: [],
    isSaved: false,
    isFinished: false,
  },
  reducers: {
    changeRoom: {
      reducer: (state, action) => {
        state.roomData = action.payload.roomData;
      },
    },
    changeStatus: {
      reducer: (state, action) => {
        state.status = action.payload.status;
      },
    },
    changeNewMember: {
      reducer: (state, action) => {
        state.newMember = !state.newMember;
      },
    },
    addReduxNode: {
      reducer: (state, action) => {
        state.nodes.push(action.payload.node);
      },
    },
    addReduxEdge: {
      reducer: (state, action) => {
        state.edges.push(action.payload.edge);
      },
    },
    changeNodes: {
      reducer: (state, action) => {
        state.nodes = action.payload.nodes;
      },
    },
    changeEdges: {
      reducer: (state, action) => {
        state.edges = action.payload.edges;
      },
    },
    changeIsSaved: {
      reducer: (state, action) => {
        state.isSaved = !state.isSaved;
      },
    },
    changeIsFinished: {
      reducer: (state, action) => {
        state.isFinished = !action.payload.isFinished;
      },
    },
  },
});

export const {
  changeRoom,
  changeStatus,
  changeNewMember,
  addReduxEdge,
  addReduxNode,
  changeEdges,
  changeNodes,
  changeIsSaved,
  changeIsFinished,
} = roomSlice.actions;
export default roomSlice.reducer;
