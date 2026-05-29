function Reviews() {

  const reviews = [
    { name: "Rutik", comment: "Amazing AI platform. Very useful for daily tasks.", rating: 5 },
    { name: "Rahul", comment: "Very fast and responsive. Loved the UI experience.", rating: 4 },
    { name: "Anita", comment: "Best AI image search website. Clean and simple design.", rating: 5 },
    { name: "Aaniya", comment: "Really helpful AI chat system. Works smoothly!", rating: 4 },
    { name: "Neha", comment: "Great experience using image search feature.", rating: 3 },
    { name: "Bunty", comment: "Super fast responses and modern UI. Loved it!", rating: 5 },
    { name: "Hemraj", comment: "This AI platform is very useful for projects.", rating: 4 },
    { name: "Urvashi", comment: "Simple, clean and very powerful AI tools.", rating: 5 }
  ];

  const colors = [
    "from-blue-500 to-cyan-500",
    "from-purple-500 to-pink-500",
    "from-green-500 to-emerald-500",
    "from-orange-500 to-yellow-500"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-8">

      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-10">
        ⭐ Client Reviews
      </h1>

      {/* Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {reviews.map((review, index) => (
          <div
            key={index}
            className="p-[1px] rounded-xl bg-gradient-to-r from-gray-700 to-gray-900 hover:scale-105 transition duration-300"
          >

            <div className="bg-gray-900 p-4 rounded-xl">

              {/* Avatar */}
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold mb-3 bg-gradient-to-r ${colors[index % colors.length]}`}>
                {review.name[0]}
              </div>

              {/* Name */}
              <h2 className="text-lg font-bold">
                {review.name}
              </h2>

              {/* Comment */}
              <p className="text-gray-400 text-sm mt-1">
                "{review.comment}"
              </p>

              {/* Rating */}
              <div className="mt-3 text-yellow-400 text-sm">
                {"⭐".repeat(review.rating)}
                <span className="text-gray-500 ml-2">
                  ({review.rating}/5)
                </span>
              </div>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

export default Reviews;