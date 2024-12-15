import { Route, Routes, Navigate, BrowserRouter as Router, BrowserRouter } from "react-router-dom"; // Import BrowserRouter as Router
import Login from "./components/Login/Login";
import Signup from "./components/Singup/singup";
import ChatbotApp from "./components/Main/main";
// import Login from "./components/Login";

function App() {
    const user = localStorage.getItem("token");

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={user ? <ChatbotApp /> : <Navigate replace to="/login" />} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/login" element={<Login/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
