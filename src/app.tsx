import Account from "./views/account";
import LogIn from "./views/login";
import Home from "./views/Home";
import { Routes, Route, Link } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";


function App() {

    return (
        <div className="flex h-screen w-screen flex-col items-center justify-center gap-5 p-10">
            <div className="flex gap-10 w-full justify-center bg=">
                <Link to="/">Home</Link>
                <Link to="/login">LogIn</Link>
                <Link to="/account">Account</Link>
            </div>
            <AuthContextProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<LogIn />} />
                    <Route path="/account" element={<Account />} />
                </Routes>
            </AuthContextProvider>
        </div>
    );
}

export default App;