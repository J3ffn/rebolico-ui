import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.tsx";
import "./index.css";

// if (import.meta.env.PROD) {
//   console.log("first");
//   const fonts_api = document.createElement(
//     '<link rel="preconnect" href="https://fonts.googleapis.com">'
//   );
//   const fonts_api_crossorigin = document.createElement(
//     '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'
//   );
//   const fonts_ref = document.createElement(
//     '<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Noticia+Text:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"></link>'
//   );

//   const head = document.getElementsByTagName("head")[0];
//   head.appendChild(fonts_api);
//   head.appendChild(fonts_api_crossorigin);
//   head.appendChild(fonts_ref);
// }

// if (import.meta.env.PROD) {
ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// }
