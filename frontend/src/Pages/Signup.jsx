import { useState } from "react";

function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {

    console.log(name, email, password);
  };

  return (

    <div className="flex justify-center items-center h-screen bg-black">

      <div className="bg-gray-900 p-10 rounded-xl w-96">

        <h1 className="text-white text-3xl mb-5 font-bold">
          Signup
        </h1>

        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 mb-4 rounded"
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button
          onClick={handleSignup}
          className="bg-blue-500 text-white w-full p-3 rounded"
        >
          Signup
        </button>

      </div>

    </div>
  );
}

export default Signup;