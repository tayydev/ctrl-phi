import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-white">
      <div className="absolute top-0 w-screen">
        <Navbar />
      </div>
      <h1 className="text-4xl text-black font-semibold py-5">Control-F, Enhanced With AI</h1>
      <button className="bg-violet-600 hover:bg-violet-800 text-white font-bold py-3 px-6 rounded text-3xl">
        Install
      </button>
    </div>
  );
}
