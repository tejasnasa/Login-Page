import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./Pages/Chat";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/chat" element={<Chat />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
