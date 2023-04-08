import React, { memo } from "react";

import { Handle } from "react-flow-renderer";

export default memo(({ data, isConnectable }) => {
  return (
    <>
      <Handle
        type="target"
        position="top"
        style={{ background: "#000" }}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />
      <div>
        Action: <strong>{data.color}</strong>
      </div>
      <select name="" id="">
        <option value="">Tap</option>
        <option value="">Double Tap</option>
        <option value="">Tripple Tap</option>
      </select>
      <Handle
        type="target"
        position="bottom"
        style={{ background: "#000" }}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />
    </>
  );
});
