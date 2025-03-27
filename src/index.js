import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />

    {/* <StartRating
      maxRating={5}
      messages={[
        "Tệ",
        "Không hài lòng",
        "Bình thường",
        "Hài lòng",
        "Tuyệt vời",
      ]}
    /> */}
  </React.StrictMode>
);
