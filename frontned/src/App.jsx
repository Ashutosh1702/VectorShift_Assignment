import FlowCanvas from "./components/FlowCanvas";
import SubmitButton from "./components/SubmitButton";

export default function App() {
  return (
    <div className="h-screen w-screen bg-slate-900 text-white flex flex-col">
      <header className="p-4 text-xl font-bold border-b border-slate-700">
        VectorShift Pipeline Builder
      </header>

      <main className="flex-1">
        <FlowCanvas />
      </main>

      <footer className="p-4 border-t border-slate-700">
        <SubmitButton />
      </footer>
    </div>
  );
}
