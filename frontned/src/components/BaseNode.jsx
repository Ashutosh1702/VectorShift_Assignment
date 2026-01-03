import { Handle, Position } from "reactflow";

export default function BaseNode({ title, inputs, outputs, children }) {
  return (
    <div className="bg-slate-900 border border-slate-600 rounded-xl p-3 min-w-[180px] shadow-lg">
      <div className="text-sky-400 font-semibold mb-2">
        {title}
      </div>

      {inputs.map((id, i) => (
        <Handle
          key={id}
          type="target"
          position={Position.Left}
          id={id}
          style={{ top: 50 + i * 20 }}
          className="!bg-sky-400"
        />
      ))}

      <div className="text-sm text-slate-200">
        {children}
      </div>

      {outputs.map((id, i) => (
        <Handle
          key={id}
          type="source"
          position={Position.Right}
          id={id}
          style={{ top: 50 + i * 20 }}
          className="!bg-green-400"
        />
      ))}
    </div>
  );
}
