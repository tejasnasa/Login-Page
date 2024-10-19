import Home from "./pages/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat";
import Header from "./components/navbar-cards/Header.jsx";
import Footer from "./components/Footer";
import "./index.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup.jsx";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="work-sans-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
