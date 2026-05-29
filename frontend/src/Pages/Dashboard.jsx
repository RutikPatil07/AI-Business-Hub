import Sidebar from "../Components/Sidebar";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-10">

        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-5xl font-bold text-blue-500">
            AI Business Hub
          </h1>
          <p className="text-gray-400 mt-2">
            Manage your AI tools, users & analytics in one place
          </p>
        </div>

        {/* STATS CARDS */}
        <div className="grid grid-cols-3 gap-6">

          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <h2 className="text-xl text-blue-400 font-bold">AI Chats</h2>
            <p className="text-4xl font-bold mt-2">120+</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <h2 className="text-xl text-green-400 font-bold">Image Searches</h2>
            <p className="text-4xl font-bold mt-2">85+</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <h2 className="text-xl text-purple-400 font-bold">Contacts</h2>
            <p className="text-4xl font-bold mt-2">42+</p>
          </div>

        </div>

        {/* ACTION CARDS */}
        <h2 className="text-2xl font-bold mt-10 mb-5 text-gray-300">
          Quick Actions
        </h2>

        <div className="grid grid-cols-3 gap-6">

          <div
            onClick={() => navigate("/chat")}
            className="bg-gray-900 p-6 rounded-2xl cursor-pointer hover:bg-gray-800 transition border border-gray-700"
          >
            <h3 className="text-xl font-bold text-blue-400">AI Chat</h3>
            <p className="text-gray-400 mt-2">
              Talk with intelligent assistant
            </p>
          </div>

          <div
            onClick={() => navigate("/images")}
            className="bg-gray-900 p-6 rounded-2xl cursor-pointer hover:bg-gray-800 transition border border-gray-700"
          >
            <h3 className="text-xl font-bold text-green-400">Image Search</h3>
            <p className="text-gray-400 mt-2">
              Search millions of images instantly
            </p>
          </div>

          <div
            onClick={() => navigate("/contact")}
            className="bg-gray-900 p-6 rounded-2xl cursor-pointer hover:bg-gray-800 transition border border-gray-700"
          >
            <h3 className="text-xl font-bold text-purple-400">Contact</h3>
            <p className="text-gray-400 mt-2">
              Manage user messages
            </p>
          </div>

        </div>

        {/* EXTRA SECTION (REVIEWS / MESSAGES) */}
        <div className="grid grid-cols-2 gap-6 mt-10">

          <div className="bg-gray-800 p-6 rounded-2xl">
            <h2 className="text-xl font-bold text-yellow-400">
              Reviews
            </h2>
            <p className="text-3xl mt-3">8+</p>
            <p className="text-gray-400">Positive user feedback</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-2xl">
            <h2 className="text-xl font-bold text-pink-400">
              Messages
            </h2>
            <p className="text-3xl mt-3">30+</p>
            <p className="text-gray-400">User inquiries received</p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;