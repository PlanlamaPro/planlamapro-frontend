import React from "react";

function Comment({ data }) {
  return (
    <div className="flex flex-col mb-2 rounded-md bg-slate-300 p-2 m-2 shadow-lg">
      <p className="ml-2 font-bold">{data.author}</p>
      <p className="ml-2">{data.content}</p>
    </div>
  );
}

export default Comment;
