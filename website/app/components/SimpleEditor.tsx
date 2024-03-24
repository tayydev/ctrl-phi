'use client'

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

const SimpleEditor = () => {
    function onChange(newValue: any) {
        console.log("change", newValue);
      }

  return (
    <div>
        <AceEditor
            placeholder="Placeholder Text"
            mode="markdown"
            theme="monokai"
            name="blah2"
            fontSize={16}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={`type shit in here`}
            setOptions={{
            enableBasicAutocompletion: false,
            enableLiveAutocompletion: false,
            enableSnippets: false,
            showLineNumbers: true,
            tabSize: 2,
        }}/>
    </div>
  )
}

export default SimpleEditor