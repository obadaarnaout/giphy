import React from "react";
import GifCard from "./GifCard";

const GifList = ({ gifs }) => {
  return (
    <div className="row">
      {gifs.map((gif) => (
        <GifCard key={gif.id} gif={gif} />
      ))}
    </div>
  );
};

export default GifList;