'use client'

import { ChangeEvent, FormEvent, FormEventHandler, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import SimpleEditor from "../components/SimpleEditor";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import Card from "../components/Card";
import { exampleText } from "../util/exampleText";
import SearchIcon from '@mui/icons-material/Search';
import Loading from "../components/Loading";

interface Match {
    explanation: string; // Example property
    matched_text: string; // Example property
    // Add other properties as needed
  }

export default function Playground() {
    const [value, setValue] = useState('')
    const [search, setSearch] = useState('')
    const [matches, setMatches] = useState<Match[]>([])
    const textFieldRef = useRef<HTMLTextAreaElement | null>(null)
    const [loading, setLoading] = useState(false)
    
    const handleValueChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
      };
    
    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        handleApiRequest()
    };

    const highlightAndScrollToText = (searchText: string) => {
        if(textFieldRef.current) {  
            const input = textFieldRef.current
            if (input != null) {
                // Find the start index of the search text
                const startIndex = input.value.indexOf(searchText);
                if (startIndex !== -1) {
                    const endIndex = startIndex + searchText.length;
                    
                    // Highlight the text
                    input.focus();
                    input.setSelectionRange(startIndex, endIndex);

                    const computedStyle = window.getComputedStyle(textFieldRef.current);
                    const lineHeight = Number(computedStyle.lineHeight.substring(0, computedStyle.lineHeight.length - 2));
                    const lines = input.scrollHeight / lineHeight
                    const charsPerLine = input.value.length / lines
                    
                    const textBeforeHighlight = input.value.substring(0, startIndex);
                    const lineBreaksBeforeStart = (textBeforeHighlight.match(/\n/g) || []).length;
                    const totalNewLineChars = (lineBreaksBeforeStart / 3) * charsPerLine

                    // const totalLineBreaks = (input.value.match(/\n/g) || []).length;
                    // console.log(lineBreaksBeforeStart)
                    // // Attempt to scroll to the highlighted text
                    // // Calculate the ratio of start index to the total length to estimate position
                    const scrollRatio = (startIndex + totalNewLineChars) / (input.value.length)
                    // const scrollRatio = ()
                    // input.scrollTop = (input.scrollHeight) * scrollRatio;
                    input.scrollTop = (input.scrollHeight * scrollRatio) - 10 * lineHeight
                    console.log(scrollRatio)
                    
                }
            }
        }
        
      };

    const handleApiRequest = async () => {
        const requestBody = {
          query: search,
          content: value // Replace this with the actual article content
        };
        try {
            setLoading(true)
            const response = await fetch('https://api.ctrl-phi.app/api', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'insomnia/8.6.1', // User-Agent header might not be allowed by browsers for security reasons
              },
              body: JSON.stringify(requestBody),
            });
      
            if (!response.ok) {
              throw new Error(`Error: ${response.status}`);
            }
      
            const data = await response.json();
            setLoading(false)
            console.log(data.results)
            setMatches(data.results)
        } catch (error) {
            console.error("Failed to fetch data:", error);
          }
    }

    return (
        <div className="flex flex-col min-h-screen items-center bg-white">
            <div className="top-0 w-screen">
                <Navbar />
            </div>
            <div className="hidden md:flex flex-row w-screen items-start justify-center h-5/6"> 
                <div className="md:w-1/2 w-11/12 flex justify-center pt-8 flex-col">
                    {/* <SimpleEditor /> */}
                    <TextField
                        id="filled-multiline-static"
                        label="Text Input"
                        multiline
                        rows={20}
                        maxRows={1000}
                        value={value}
                        variant="filled"
                        sx={{width: '100%'}}
                        onChange={handleValueChange}
                        inputRef={textFieldRef}
                    />
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="hidden md:flex text-xl text-black font-semibold pt-3">Choose some sample text here:</h1>
                        <div className="hidden md:flex flex-row">
                            <div className='p-3'>
                                <button onClick={() => setValue(exampleText[0])} className="block max-w-s p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900">Alan Turing</h5>
                                </button>
                            </div>
                            <div className='p-3'>
                                <button onClick={() => setValue(exampleText[1])} className="block max-w-s p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900">AI Research Paper</h5>
                                </button>
                            </div>
                            <div className='p-3'>
                                <button onClick={() => setValue(exampleText[2])} className="block max-w-s p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900">Declaration of Independence</h5>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-8 justify-start items-center flex flex-col pt-8">
                    <form onSubmit={handleSubmit} className="w-full transition-transform top-0">
                        <TextField
                            label="Search Text"
                            InputProps={{
                                endAdornment: (
                                <InputAdornment position="start">
                                    <IconButton onClick={handleSubmit}>
                                    <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                                )
                            }}
                            onChange={handleSearchChange}
                            onSubmit={() => console.log("PEEPEE")}
                            rows={1}
                            sx={{width: "380px"}}
                        />
                    </form>
                    {loading ? <Loading /> : <></>}
                    {!loading ? matches.map((value, key) => (
                        <div className="py-3 animate-slidein" key={key}>
                            <button onClick={(e) => highlightAndScrollToText(value.matched_text)} className="block max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                                <h5 className="mb-1 text-md font-semibold tracking-tight text-gray-900">{`"${value.matched_text}"`}</h5>
                                <h5 className="mb-1 text-md tracking-tight text-gray-700">{`${value.explanation}`}</h5>
                            </button>
                        </div>
                    )) : <></>}
                </div>
                
            </div>
            
            <div className="flex md:hidden">
                <h1 className="text-md text-black font-mono font-semibold py-5">Playground not available on mobile!</h1>
            </div>
            
        </div>
    );
  }
  