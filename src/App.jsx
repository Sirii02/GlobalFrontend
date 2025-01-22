import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./SignIn";
import Home from "./Home";
import Login from "./Login";

export default function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Login />}/> */}
          {isAuth ? (
            <Route path="/" element={<Home />} />
          ) : (
            <Route path="/" element={<Login setIsAuth={setIsAuth}/>} />
          )}
        </Routes>
      </BrowserRouter>
    </>
  )
}
