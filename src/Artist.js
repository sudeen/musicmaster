import React from "react";

const Artist = ({ artist }) => {
  if (!artist) return null;

  const { images, name, followers, genres } = artist;

  return (
    <div>
      <h3>{name}</h3>
      <p>{followers.total}</p>
      <p>{genres.join(",")}</p>
      <img
        style={{
          width: 200,
          height: 200,
          borderRadius: 100,
          objectFit: "cover",
        }}
        src={images[0] && images[0].url}
        alt="artist-profile"
      />
      {/* <br />
      <div>
        <h4>List of available images</h4>
        {images.map((images, i) => {
          return (
            <img
              key={images.url}
              src={artist.images[i].url}
              alt="gallery-images"
            />
          );
        })}
      </div> */}
    </div>
  );
};

export default Artist;
