import Navbar from "./components/Navbar";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function About() {
    return (
        <div className="flex flex-col min-h-screen items-center bg-white">
            <div className="top-0 w-screen">
                <Navbar />
            </div>
            <div className="flex-col flex items-center justify-center h-5/6 mt-25 w-screen">
                <div className="flex flex-col justify-center items-center md:w-2/3 w-11/12">
                    <h1 className="text-black md:text-7xl text-3xl font-semibold pt-16 pr-2 text-center">ctrl-φ makes ctrl-F</h1>
                    <h1 className="text-transparent md:text-7xl text-3xl font-semibold pr-2 pb-5 text-center bg-clip-text bg-gradient-to-r from-rose-500 to-yellow-300 animate-slidein">intelligent</h1>
                </div>
                <div className="flex md:flex-row flex-col w-11/12 pt-5 justify-center">
                    <div className="block max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 animate-slidein300 opacity-0">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Ctrl + Shift + .</h5>
                        <p className="font-normal text-gray-700">Tell Ctrl-φ what you are looking for on any webpage</p>
                        <img src="/whydieex.png"></img>
                    </div>
                    <div className="h-max px-5 md:pt-48 py-10 justify-center items-center animate-slidein300 opacity-0">
                        <ArrowForwardIosIcon sx={{width: "60px", height: "60px", color: "black"}}/>
                    </div>
                    <div className="block max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 animate-slidein500 opacity-0 ">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Processed by AI</h5>
                        <p className="font-normal text-gray-700">Our custom AI agent will search the web page for the content you are looking for</p>
                        <img src="/robot1.jpg"></img>
                    </div>
                    <div className="h-max px-5 md:pt-48 py-10 justify-center items-center animate-slidein500 opacity-0">
                        <ArrowForwardIosIcon sx={{width: "60px", height: "60px", color: "black"}}/>
                    </div>
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 animate-slidein700 opacity-0">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Scrolls to the Best Match</h5>
                        <p className="font-normal text-gray-700">Highlights the most relevant content to your search and lets you jump straight to it.</p>
                        <img src="/highlight.png"></img>
                    </div>
                </div>


                
            </div>
        </div>
    );
  }
