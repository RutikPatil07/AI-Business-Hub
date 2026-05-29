import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="w-64 bg-gray-900 min-h-screen p-5 text-white">

      <h1 className="text-2xl font-bold text-blue-500 mb-10">
        AI Business Hub
      </h1>

      <div className="space-y-4">

        <div
          onClick={() => navigate("/dashboard")}
          className="cursor-pointer hover:text-blue-400"
        >
          Dashboard
        </div>

        <div
          onClick={() => navigate("/chat")}
          className="cursor-pointer hover:text-blue-400"
        >
          AI Chat
        </div>

        {/* ✅ FIXED */}
        <div
          onClick={() => navigate("/images")}
          className="cursor-pointer hover:text-blue-400"
        >
          Image Search
        </div>

        <div
          onClick={() => navigate("/contact")}
          className="cursor-pointer hover:text-blue-400"
        >
          Contact
        </div>

        <div
          onClick={() => navigate("/reviews")}
          className="cursor-pointer hover:text-blue-400"
        >
          Reviews
        </div>

      </div>
    </div>
  );
}

export default Sidebar;