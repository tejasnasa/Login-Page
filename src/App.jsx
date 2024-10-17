import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./Pages/Chat";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./index.css";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Login2 from "./Components/LoginCard";

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
