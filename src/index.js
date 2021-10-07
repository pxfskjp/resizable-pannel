import React from "react";
import ReactDOM from "react-dom";
import ResizablePanels from "resizable-panels-react";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <ResizablePanels
        bkcolor="#e1b12c"
        displayDirection="row"
        width="100%"
        height="800px"
        panelsSize={[40, 60]}
        sizeUnitMeasure="%"
        resizerColor="#353b48"
        resizerSize="30px"
      >
        <div
          style={{
            background: "#44bd32",
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div
            style={{ background: "#40739e", width: "80%", minWidth: "100px" }}
          >
            <h1>:D</h1>
          </div>
        </div>
        <div style={{ background: "#40739e", height: "100%", width: "100%" }} />
      </ResizablePanels>
      <br />
      <ResizablePanels
        bkcolor="#e1b12c"
        displayDirection="column"
        width="100%"
        height="800px"
        panelsSize={[40, 60]}
        sizeUnitMeasure="%"
        resizerColor="#dcdde1"
        resizerSize="100px"
      >
        <div style={{ background: "#7f8fa6", height: "100%", width: "100%" }} />
        <div
          style={{
            background: "#e84118",
            height: "100%",
            width: "100%",
            display: "flex",
            overflow: "auto",
            whiteSpace: "nowrap",
            color: "white"
          }}
        >
          <div>
            <h1>
              That's a big text, or maybe not. I guess i need a bigger text.
              Perfect :D now you can scroll
            </h1>
          </div>
        </div>
      </ResizablePanels>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
