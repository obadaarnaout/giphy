import React from "react";

const GifCard = ({ gif }) => {
  return (
    <div className="col-md-3">
      <div className="card">
        <img key={gif.id} src={gif.images.original.url} alt={gif.title} />
      </div>
    </div>
  );
};

export default GifCard;