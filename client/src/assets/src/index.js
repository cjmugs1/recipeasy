import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import { createRoot } from 'react-dom/client'
import "./assets/scss/style.scss";
import * as serviceWorker from "./serviceWorker";
import App from "./app"



const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

serviceWorker.register();
