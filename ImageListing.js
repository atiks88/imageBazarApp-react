import React from "react";
import "../App.css";
import "material-icons";

function ImageListing({ data }) {

    const download = (result) =>{
        window.open(result.urls.full, "_blank");
    }

  return (
    <div className="imageContainer">
      {data.results.map((result) => {
        return (
          <div>
            <div onClick={() => download(result)} style={{ position: "relative", display: "inline-block",zIndex:"100" }}>
              <img
                key={result.id}
                className="images"
                src={result.urls.regular}
                alt={result.alt}
                width={350}
                height={350}
              />
              <p
                className="likes"
                style={{ position: "absolute", bottom: 0, left: 0 }}
              >
                <span className="material-icons favorite">favorite</span>
                {result.likes}
              </p>
            </div>
            <div className="descreption">
                 <div className="profile-image">
                 <img src={result.user.profile_image.medium} alt="user" />
                  <b>{result.user.name}</b>
                 </div>
                 <div className="profile-des">
                  <p>{result.alt_description}</p>
                 </div>
                </div>
          </div>
        );
      })}
    </div>
  );
}

export default ImageListing;
