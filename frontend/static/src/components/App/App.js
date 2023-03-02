import { useState } from "react";
import { Outlet, Route } from "react-router-dom";
import Header from "../../Header/Header";
import "../styles/App.css";

function App() {
   const [isAuth, setAuth] = useState(false);

   return (
      <>
         <Header isAuth={isAuth} />
         <Outlet context={[setAuth]} />
      </>
   );
}

export default App;
