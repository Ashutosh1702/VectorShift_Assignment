import BaseNode from "../components/BaseNode";

export default function InputNode() {
  return (
    <BaseNode title="Input" inputs={[]} outputs={["out"]}>
      Pipeline input
    </BaseNode>
  );
}
