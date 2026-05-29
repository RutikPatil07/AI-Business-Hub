import { useNavigate } from "react-router-dom";

function Hero() {

  const navigate = useNavigate();

  return (

    <section className="bg-black text-white min-h-screen flex items-center">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Left */}

        <div>

          <h1 className="text-6xl font-bold leading-tight">

            Future Of
            <span className="text-blue-500">
              {" "}AI Search
            </span>
            {" "}And Chat

          </h1>

          <p className="text-gray-400 text-xl mt-6">

            Search Images, Chat with AI and explore future technology.

          </p>

          <div className="mt-8 flex gap-5">

            {/* Get Started */}

            <button
              onClick={()=>navigate("/chat")}
              className="bg-blue-500 hover:bg-blue-700 px-6 py-3 rounded-lg text-lg"
            >
              Get Started
            </button>

            {/* Explore */}

            <button
              onClick={()=>navigate("/images")}
              className="border border-blue-500 px-6 py-3 rounded-lg text-lg hover:bg-blue-500"
            >
              Explore
            </button>

          </div>

        </div>

        {/* Right */}

        <div className="flex justify-center">

          <img
            src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png"
            alt="AI"
            className="w-[500px]"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;