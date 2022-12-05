import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
// import RenderAllPlayers from './components/RenderAllPlayers';



const appElement = document.getElementById("app")
const root = createRoot(appElement)

root.render(<App />);

// my App file and component = Sean's Main file and component 