import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BookmarkProvider } from "./context/bookmarkContext";
import { DetailProvider } from "./context/detail-context";
import { MealsProvider } from "./context/meals-context";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <MealsProvider>
      <DetailProvider>
        <BookmarkProvider>
          <App />
        </BookmarkProvider>
      </DetailProvider>
    </MealsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
