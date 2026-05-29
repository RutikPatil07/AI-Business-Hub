import { Link } from "react-router-dom";

function Navbar() {

  return (

    <nav className="bg-black text-white shadow-lg">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}

        <h1 className="text-3xl font-bold text-blue-500">
          AI Business Hub
        </h1>

        {/* Navigation Links */}

        <div className="flex gap-8 text-lg">

          <Link
            to="/"
            className="hover:text-blue-500 transition"
          >
            Home
          </Link>

          <Link
            to="/chat"
            className="hover:text-blue-500 transition"
          >
            AI Chat
          </Link>

          <Link
            to="/images"
            className="hover:text-blue-500 transition"
          >
            Image Search
          </Link>

          <Link
            to="/dashboard"
            className="hover:text-blue-500 transition"
          >
            Dashboard
          </Link>

          <Link
            to="/reviews"
            className="hover:text-blue-500 transition"
          >
            Reviews
          </Link>

          <Link
            to="/contact"
            className="hover:text-blue-500 transition"
          >
            Contact
          </Link>

        </div>

        {/* Login Button */}

        <Link to="/login">

          <button className="bg-blue-500 hover:bg-blue-700 px-5 py-2 rounded-lg font-semibold">

            Login

          </button>

        </Link>

      </div>

    </nav>
  );
}

export default Navbar;