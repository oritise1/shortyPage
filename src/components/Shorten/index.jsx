import React, { useState } from "react";
import BgImg from "../../assets/bg-shorten-desktop.svg";
import Button from "../Button";

const Shorten = () => {
  const [url, setUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showShortenedUrl, setShowShortenedUrl] = useState(false);

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
    setError("");
    setShowShortenedUrl(false);
  };

  const handleShortenUrl = async () => {
    if (!url) {
      setError("Please add a link...");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${url}`
      );
      const data = await response.json();
      if (data.ok) {
        setShortenedUrl(data.result.full_short_link);
        setShowShortenedUrl(true);
      } else {
        setError("Failed to shorten URL. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again later.");
    }
    setLoading(false);
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(shortenedUrl);
  };

  return (
    <div className="w-full bg-gray-200 py-8 px-4 md:px-8 lg:px-16">
      <div
        className="w-full max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-4 p-4 bg-purple-900 rounded-lg shadow-lg bg-cover bg-center relative"
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        <input
          type="text"
          value={url}
          onChange={handleUrlChange}
          placeholder="Shorten a link here..."
          className="flex-1 w-full md:w-auto py-3 px-4 rounded-lg text-gray-700 placeholder-gray-400"
        />
        {error && (
          <p className="text-red-500 text-sm italic mt-2 md:absolute md:top-full md:mt-1">
            {error}
          </p>
        )}
        <Button
          onClick={handleShortenUrl}
          paddingX="px-6"
          paddingY="py-3"
          textFont="text-sm md:text-base font-semibold"
          borderRaduis="rounded-lg"
          color="bg-[#9ae4e5]"
          hoverColor="hover:bg-blue-400"
        >
          {loading ? "Loading..." : "Shorten It!"}
        </Button>
      </div>

      {showShortenedUrl && shortenedUrl && (
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between bg-white p-4 rounded-lg shadow-lg">
          <p className="text-gray-700 truncate w-full md:w-auto mb-4 md:mb-0">
            {url}
          </p>
          <p className="text-blue-600 truncate w-full md:w-auto">
            {shortenedUrl}
          </p>
          <Button
            paddingX="px-4 md:px-6"
            paddingY="py-2"
            borderRaduis="rounded-lg"
            onClick={handleCopyToClipboard}
          >
            Copy
          </Button>
        </div>
      )}
    </div>
  );
};

export default Shorten;
