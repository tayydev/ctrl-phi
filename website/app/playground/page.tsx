import Navbar from "../components/Navbar";
import SimpleEditor from "../components/SimpleEditor";
import { TextField } from "@mui/material";

export default function Playground() {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center bg-white">
            <div className="absolute top-0 w-screen">
                <Navbar />
            </div>
            <div className="md:w-1/2 sm:w-5/6 flex justify-center">
                {/* <SimpleEditor /> */}
                <TextField
                    id="filled-multiline-static"
                    label="Text Input"
                    multiline
                    rows={20}
                    maxRows={1000}
                    defaultValue=""
                    variant="filled"
                    sx={{width: '100%'}}
                />
            </div>
        </div>
    );
  }
  