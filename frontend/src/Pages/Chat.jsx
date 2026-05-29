import { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userText = message;

    // user message
    setMessages((prev) => [
      ...prev,
      { role: "user", text: userText }
    ]);

    setMessage("");
    setLoading(true);

    try {
      const res = await axios.post("http://127.0.0.1:5000/chat", {
        message: userText,
      });

      setMessages((prev) => [
        ...prev,
        { role: "ai", text: res.data.reply }
      ]);

    } catch (error) {
      console.log(error);

      setMessages((prev) => [
        ...prev,
        { role: "ai", text: "❌ Error connecting to backend" }
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="bg-black min-h-screen text-white flex flex-col p-6">

      {/* HEADER */}
      <h1 className="text-4xl font-bold text-blue-500 mb-4">
        AI Chat Assistant
      </h1>

      {/* CHAT BOX */}
      <div className="flex-1 bg-gray-900 rounded-xl p-4 overflow-y-auto space-y-3">

        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`p-3 rounded-xl max-w-[70%] ${
                msg.role === "user"
                  ? "bg-blue-600"
                  : "bg-gray-700"
              }`}
            >
              {msg.role === "ai" ? (
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {msg.text}
                </ReactMarkdown>
              ) : (
                msg.text
              )}
            </div>
          </div>
        ))}

        {loading && (
          <p className="text-gray-400">Thinking...</p>
        )}
      </div>

      {/* INPUT AREA */}
      <div className="flex gap-2 mt-4">
        <textarea
          value={message}
          placeholder="Ask anything..."
          className="flex-1 p-3 rounded-lg text-black h-16"
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          onClick={sendMessage}
          className="bg-blue-500 px-6 rounded-lg"
        >
          Send
        </button>
      </div>

    </div>
  );
}

export default Chat;