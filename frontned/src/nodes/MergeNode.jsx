import BaseNode from "../components/BaseNode";
export default () => (
  <BaseNode title="Merge" inputs={["a", "b"]} outputs={["out"]}>
    Merge streams
  </BaseNode>
);
