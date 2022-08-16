import React, { useState } from "react";
import { useEffect } from "react";

const Header = () => {
  const [image, setImage] = useState({});
  const getImage = async () => {
    const route =
      "https://api.unsplash.com/photos/random/?client_id=8rGqth3CNsQfL6gFSRCKkuzOzNovoXB80G6jbyBVSo4";
    const res = await fetch(route);
    const data = await res.json();
    setImage(data);
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <header className="p-5 bg-light text-center">
      <h1 className="card-title p-5">Gallery App</h1>
      <p className="card-text">The most popular image site on the web</p>
      {/* <div className="card">
        <img src={image} alt="background.png" className="card-img" />
        <div className="card-img-overlay">
          <h1 className="card-title">Gallery App</h1>
          <p className="card-text">The most popular image site on the web</p>
        </div>
      </div> */}
    </header>
  );
};

export default Header;
