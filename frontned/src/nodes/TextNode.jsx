import { useState } from "react";
import { Handle, Position } from "reactflow";

export default function TextNode() {
  const [text, setText] = useState("");

  const variables = [
    ...text.matchAll(/\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g),
  ].map((m) => m[1]);

  return (
    <div className="bg-slate-900 border border-slate-600 rounded-xl p-3 min-w-[220px]">
      <div className="text-sky-400 font-semibold mb-2">Text</div>

      {variables.map((v, i) => (
        <Handle
          key={v}
          type="target"
          position={Position.Left}
          id={v}
          style={{ top: 60 + i * 20 }}
          className="!bg-sky-400"
        />
      ))}

      <textarea
        value={text}
        placeholder="Type text with {{variable}}"
        onChange={(e) => {
          setText(e.target.value);
          e.target.style.height = "auto";
          e.target.style.height = e.target.scrollHeight + "px";
        }}
        className="w-full bg-slate-800 text-white p-2 rounded resize-none"
      />

      <Handle
        type="source"
        position={Position.Right}
        id="text"
        className="!bg-green-400"
      />
    </div>
  );
}
