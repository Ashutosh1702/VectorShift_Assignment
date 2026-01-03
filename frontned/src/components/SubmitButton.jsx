import axios from "axios";

export default function SubmitButton() {
  const handleSubmit = async () => {
    const { nodes, edges } = window.flowData;

    const res = await axios.post(
      "http://localhost:8000/pipelines/parse",
      { nodes, edges }
    );

    alert(
      `Nodes: ${res.data.num_nodes}\n` +
      `Edges: ${res.data.num_edges}\n` +
      `Is DAG: ${res.data.is_dag}`
    );
  };

  return (
    <button
      onClick={handleSubmit}
      className="bg-sky-500 hover:bg-sky-600 px-6 py-2 rounded-lg font-semibold"
    >
      Submit Pipeline
    </button>
  );
}
