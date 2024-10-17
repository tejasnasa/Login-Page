import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./Pages/Chat";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./index.css";
import Login from "./Pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/chat" element={<Chat />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
