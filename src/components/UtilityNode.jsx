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
        Choose Action: <strong>{data.color}</strong>
      </div>
      <select name="" id="">
        <option value="">Send Mail</option>
        <option value="">Send Whatsapp</option>
        <option value="">Call</option>
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
