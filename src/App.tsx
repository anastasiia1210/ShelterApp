import './App.css'
import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
    return (
    <div className="app">
        <Header />
        <div className="content">
            <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default App
