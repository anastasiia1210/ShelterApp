import './App.css'
import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import {useState} from "react";
import UserHeader from "./Components/Header/UserHeader";

function App() {
    const [authUser, setAuthUser] = useState(false);
    return (
    <div className="app">
        {!authUser ? <Header/> : <UserHeader authUser={authUser} setAuthUser={setAuthUser}/>}
        <div className="content">
            <Outlet />
        </div>
        <Footer authUser={authUser} setAuthUser={setAuthUser}/>
    </div>
  )
}

export default App
