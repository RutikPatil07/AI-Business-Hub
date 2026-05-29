import { useState } from "react";

function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const sendMessage = () => {

    // validation
    if (!name || !email || !message) {
      setStatus("⚠ Please fill all fields");
      return;
    }

    console.log(name, email, message);

    // show success message
    setStatus("✅ Message sent successfully!");

    // clear fields
    setName("");
    setEmail("");
    setMessage("");

    // remove message after 2 sec
    setTimeout(() => {
      setStatus("");
    }, 2000);
  };

  return (

    <div className="flex justify-center items-center h-screen bg-black">

      <div className="bg-gray-900 p-10 rounded-xl w-96 shadow-lg">

        <h1 className="text-white text-3xl mb-5 font-bold text-center">
          Contact Us
        </h1>

        {/* Status message */}
        {status && (
          <p className="text-center text-sm mb-3 text-green-400">
            {status}
          </p>
        )}

        <input
          type="text"
          placeholder="Name"
          value={name}
          className="w-full p-3 mb-4 rounded bg-gray-800 text-white outline-none"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          className="w-full p-3 mb-4 rounded bg-gray-800 text-white outline-none"
          onChange={(e) => setEmail(e.target.value)}
        />

        <textarea
          placeholder="Message"
          value={message}
          className="w-full p-3 mb-4 rounded bg-gray-800 text-white outline-none"
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white w-full p-3 rounded hover:bg-blue-600 transition"
        >
          Send Message
        </button>

      </div>
    </div>
  );
}

export default Contact;