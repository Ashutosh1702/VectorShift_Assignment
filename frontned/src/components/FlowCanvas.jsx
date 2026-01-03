import { useState, useCallback } from "react";
import ReactFlow, { Controls, Background, applyNodeChanges, applyEdgeChanges } from "reactflow";
import "reactflow/dist/style.css";

import InputNode from "../nodes/InputNode";
import OutputNode from "../nodes/OutputNode";
import LLMNode from "../nodes/LLMNode";
import TextNode from "../nodes/TextNode";
import MathNode from "../nodes/MathNode";
import DelayNode from "../nodes/DelayNode";
import MergeNode from "../nodes/MergeNode";
import FilterNode from "../nodes/FilterNode";
import LoggerNode from "../nodes/LoggerNode";

const nodeTypes = {
  input: InputNode,
  output: OutputNode,
  llm: LLMNode,
  text: TextNode,
  math: MathNode,
  delay: DelayNode,
  merge: MergeNode,
  filter: FilterNode,
  logger: LoggerNode,
};

export default function FlowCanvas() {
  const [nodes, setNodes] = useState([
    { id: "1", type: "input", position: { x: 50, y: 50 }, data: {} },
    { id: "2", type: "text", position: { x: 300, y: 50 }, data: {} },
    { id: "3", type: "output", position: { x: 600, y: 50 }, data: {} },
  ]);

  const [edges, setEdges] = useState([]);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  // backend submit ke liye
  window.flowData = { nodes, edges };

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      nodeTypes={nodeTypes}
      fitView
      className="bg-slate-800"
    >
      <Controls />
      <Background gap={16} />
    </ReactFlow>
  );
}
