import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./components/App/App";
import MainPage from "./components/App/MainPage";
import Login from "./components/Auth/LoginForm";
import RegistrationForm from "./components/Auth/RegistrationForm";
import ArticleList from "./components/Articles/ArticleList";
import Article from "./components/Articles/Article";
import WriterPortal from "./components/Articles/WriterPortal";

import reportWebVitals from "./reportWebVitals";
/*  */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <Router>
         <Routes>
            <Route path="/" element={<App />}>
               <Route path="home" element={<MainPage />} />
               <Route path="login" element={<Login />} />
               <Route path="portal" element={<WriterPortal />} />
               <Route path="register" element={<RegistrationForm />} />
               <Route path="articles" element={<ArticleList />} />
               <Route path="articles/:articleID" element={<Article />} />
            </Route>
            <Route
               path="*"
               element={
                  <main>
                     <p className="text-center">404</p>
                  </main>
               }
            />
         </Routes>
      </Router>
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
