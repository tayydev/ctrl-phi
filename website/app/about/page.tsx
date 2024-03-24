import Navbar from "../components/Navbar";

export default function About() {
    return (
        <div className="flex flex-col min-h-screen items-center bg-white">
            <div className="top-0 w-screen">
                <Navbar />
            </div>
            <div className="flex-col items-start justify-center h-5/6 mt-25">
                <div className="flex flex-row">
                    <h1 className="text-black text-5xl font-bold pt-20 pr-3">ctrl-φ</h1>
                    <h1 className="text-black text-5xl font-semibold pt-20">makes </h1>
                </div>
                
            </div>
        </div>
    );
  }
