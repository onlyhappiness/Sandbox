import React, { useState } from "react";

function UploadTest() {
  const [selectedFiles, setSelectedFiles] =
    useState([]);

  const handleImageChange = (e) => {
    if (e.target.files) {
      const filesArray = Array.from(
        e.target.files
      ).map((file) => URL.createObjectURL(file));

      setSelectedFiles((prevImage) =>
        prevImage.concat(filesArray)
      );
      Array.from(e.target.files).map((file) =>
        URL.revokeObjectURL(file)
      );
    }
  };

  const renderPhotos = (source) => {
    console.log("source=======", source);

    return source.map((photo) => {
      return (
        <img src={photo} alt="" key={photo} />
      );
    });
  };

  return (
    <div>
      <div className="heading">
        React Multiple Images Preview
      </div>
      <div>
        <input
          type="file"
          id="file"
          multiple
          onChange={handleImageChange}
        />
        <div className="label-holder">
          <label htmlFor="file" className="label">
            <i className="material-icons">
              add_a_photo
            </i>
          </label>
        </div>
        <div className="result">
          {renderPhotos(selectedFiles)}
        </div>
      </div>
    </div>
  );
}

export default UploadTest;
