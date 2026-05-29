function Footer() {

  return (

    <footer className="bg-black text-white py-10">

      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Company */}

          <div>

            <h1 className="text-3xl font-bold text-blue-500 mb-4">
              AI Business Hub
            </h1>

            <p className="text-gray-400">
              Future AI platform with Chatbot, Image Search,
              Dashboard, Reviews and many smart AI tools.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h2 className="text-2xl font-semibold mb-4">
              Quick Links
            </h2>

            <ul className="space-y-2 text-gray-400">

              <li>Home</li>

              <li>AI Chat</li>

              <li>Image Search</li>

              <li>Dashboard</li>

              <li>Reviews</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h2 className="text-2xl font-semibold mb-4">
              Contact
            </h2>

            <p className="text-gray-400">
              Email: support@aibusinesshub.com
            </p>

            <p className="text-gray-400 mt-2">
              India
            </p>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-500">

          © 2026 AI Business Hub. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;