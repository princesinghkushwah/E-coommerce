import React from "react";

const Header = () => {
  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1593839685369-ce1c350d276f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzh8fHNob2VzJTIwcGhvdG9ncmFwaHl8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              className="header"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1510711433345-38a10edd7b0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHNob2VzJTIwcGhvdG9ncmFwaHl8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="header" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1621059591080-d5db06386b53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEzfHxzaG9lcyUyMHBob3Rvc2hvb3R8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="header" alt="..." />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
