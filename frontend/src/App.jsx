import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Chat from "./Pages/Chat";
import ImageSearch from "./Pages/ImageSearch";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import Contact from "./Pages/Contact";
import Reviews from "./Pages/Reviews";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/chat" element={<Chat />} />

        {/* ✅ FIXED ROUTE */}
        <Route path="/images" element={<ImageSearch />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reviews" element={<Reviews />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;