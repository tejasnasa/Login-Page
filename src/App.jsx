import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";
import Login from "./components/LoginCard";
import Signup from "./components/SignupCard";
import Login2 from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="container work-sans-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login2" element={<Login2 />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
