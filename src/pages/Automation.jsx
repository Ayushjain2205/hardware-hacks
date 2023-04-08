import React from "react";
import ReactFlow from "reactflow";
import "reactflow/dist/style.css";

import Flow from "../components/flow";

const Automation = () => {
  return (
    <div>
      <div class="navbar bg-primary">
        <a class="btn btn-ghost normal-case text-xl text-base">
          <i class="fa-brands fa-nfc-symbol"></i> &nbsp; Tag-Yo
        </a>
      </div>
      <Flow />
    </div>
  );
};

export default Automation;
