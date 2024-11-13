import Foldertree from "./Foldertree.js";

function App() {
  return <div className="flex items-center justify-center min-h-screen w-full bg-gradient-to-r from-slate-600 to-slate-950">
    <div className="w-[400px] rounded-2xl bg-white p-5 shadow-2xl">
      <h1 className="mb-6 text-center font-mono text-5xl font-bold">Folder Tree</h1>
      <Foldertree/>
    </div>
  </div>
}

export default App;
