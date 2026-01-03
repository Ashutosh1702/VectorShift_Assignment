import BaseNode from "../components/BaseNode";

export default function OutputNode() {
  return (
    <BaseNode title="Output" inputs={["in"]} outputs={[]}>
      Pipeline output
    </BaseNode>
  );
}
