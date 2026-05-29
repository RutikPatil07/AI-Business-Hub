import { useState } from "react";
import axios from "axios";

function ImageSearch() {

  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);

  const searchImages = async () => {
    try {
      const res = await axios.get(
        `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=z0GZSo6zFg-LaqSFN9-btFMhBdEv7B4nFtmFdFH4ryg`
      );

      setImages(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-black min-h-screen text-white p-10">

      <h1 className="text-5xl font-bold text-blue-500 mb-10">
        Image Search
      </h1>

      <div className="flex gap-5">

        <input
          type="text"
          placeholder="Search Images..."
          className="w-full p-4 rounded-lg text-black"
          onChange={(e) => setQuery(e.target.value)}
        />

        <button
          onClick={searchImages}
          className="bg-blue-500 px-6 rounded-lg"
        >
          Search
        </button>

      </div>

      <div className="grid grid-cols-3 gap-5 mt-10">

        {images.map((img) => (
          <img
            key={img.id}
            src={img.urls.small}
            className="rounded-xl"
          />
        ))}

      </div>

    </div>
  );
}

export default ImageSearch;