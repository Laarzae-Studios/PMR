import { StrictMode } from "react";
import { render } from "react-dom";

// Import stylesheet and Components
import "./index.css";
import App from "./App";

render(
    <StrictMode>
        <App/>
    </StrictMode>,
    document.getElementById( "root" ),
);
