import * as React from "react";
import { createRoot } from 'react-dom/client';
import "./index.css";
import London from "./Map";

const container = document.getElementById("root");
const root = createRoot(container);

// root.render(<App />);
root.render(<London />);

