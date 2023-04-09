import { useCallback, useState } from "react";
import ColorSelectorNode from "../components/ColorSelectorNode";
import UtilityNode from "./UtilityNode";
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "react-flow-renderer";
import { Link } from "react-router-dom";

const nodeTypes = {
  selectorNode: ColorSelectorNode,
  utilityNode: UtilityNode,
};

const initialNodes = [
  {
    id: "2",
    data: { label: "Triggers" },
    position: { x: 100, y: 0 },
    className: "light",
    sourcePosition: "right",
    targetPosition: "left",
    style: {
      backgroundColor: "rgba(255,0,244,0.6)",
      width: 200,
      height: 200,
      boxShadow:
        "box-shadow: 1px 1px 0 #000, 2px 2px 0 #000, 3px 3px 0 #000, 4px 4px 0 #000",
    },
  },
  {
    id: "2a",
    data: { label: "On Tap" },
    position: { x: 25, y: 50 },
    parentNode: "2",
    style: {
      backgroundColor: "rgb(203,253,2)",
    },
  },
  {
    id: "4",
    data: { label: "Actions" },
    position: { x: 350, y: 0 },
    className: "light",
    sourcePosition: "right",
    targetPosition: "left",
    style: {
      backgroundColor: "rgba(255,0,244,0.6)",
      width: 300,
      height: 300,
    },
  },
  {
    id: "4a",
    data: { label: "Send Message" },
    position: { x: 25, y: 200 },
    parentNode: "4",
    style: {
      backgroundColor: "rgb(203,253,2)",
    },
  },
  {
    id: "4b",
    data: { label: "Fetch latest score" },
    position: { x: 25, y: 100 },
    parentNode: "4",
    style: {
      backgroundColor: "rgb(203,253,2)",
    },
  },
];

const initialEdges = [
  { id: "e4b1-4b2", source: "4b1", target: "4b2" },
  { id: "e2-4", source: "2", target: "4" },
  { id: "4a-4b", source: "4b", target: "4a" },
];

function Flow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );

  const onConnect = useCallback(
    (connection) =>
      setEdges((eds) => addEdge({ ...connection, animated: true }, eds)),
    [setEdges]
  );

  const getNodeId = () => `randomnode_${+new Date()}`;

  const onAdd = useCallback(() => {
    const newNode = {
      id: getNodeId(),
      type: "selectorNode",
      parentNode: "2",
      data: { label: "Added node" },
      position: {
        x: 25,
        y: 120,
      },
      style: {
        backgroundColor: "rgb(203,253,2)",
      },
    };
    setNodes((nds) => nds.concat(newNode));
  }, [setNodes]);

  const onAddUtility = useCallback(() => {
    const newNode = {
      id: getNodeId(),
      type: "utilityNode",
      parentNode: "4",
      data: { label: "Added node" },
      position: {
        x: 25,
        y: 120,
      },
      style: {
        backgroundColor: "rgb(203,253,2)",
      },
    };
    setNodes((nds) => nds.concat(newNode));
  }, [setNodes]);

  return (
    <div style={{ width: "90vw", height: "400px" }}>
      <div className="flex gap-2 justify-center mt-4">
        <button className="btn btn-accent" onClick={onAdd}>
          Add Trigger
        </button>
        <button className="btn btn-accent" onClick={onAddUtility}>
          Add Action
        </button>
      </div>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      />
      <div className="flex justify-center">
        <Link to="/run">
          <button className="btn btn-accent self-center">
            <i class="fa-regular fa-bookmark"></i> &nbsp;Save automation
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Flow;
