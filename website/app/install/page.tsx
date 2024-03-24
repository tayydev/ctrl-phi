'use client'

import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Install() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/extension.zip'; // Adjust the path to your file
    link.setAttribute('download', 'extension.zip'); // Optional: specify the download filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-white">
      <div className="absolute top-0 w-screen">
        <Navbar />
      </div>
      <h1 className="text-4xl text-black font-semibold py-5">Control-F, Enhanced With AI. Install Now!</h1>
      <button onClick={handleDownload} className="bg-violet-600 hover:bg-violet-800 text-white font-bold py-3 px-6 rounded text-3xl">
        Install
      </button>
    </div>
  );
}

