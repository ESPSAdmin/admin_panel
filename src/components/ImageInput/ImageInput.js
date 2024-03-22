import "./ImageInput.css";
import React, { useEffect, useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";

const ImageInput = ({productData,setProductData}) => {
    

    const [productImage,setProductImage] = useState([])
    

  const [images, setImages] = useState({
    first: { image: null, filename: "No file selected" },
    second: { image: null, filename: "No file selected" },
    third: { image: null, filename: "No file selected" },
    fourth: { image: null, filename: "No file selected" },
    fifth: { image: null, filename: "No file selected" },
  });

  const handleImageChange = (e, fieldName) => {
    const file = e.target.files[0];
    const newImages = { ...images };

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        newImages[fieldName] = { image: reader.result, filename: file.name };
        setImages(newImages);
      };
      reader.readAsDataURL(file);
      setProductImage([...productImage,file])
    } else {
      newImages[fieldName] = { image: null, filename: "No file selected" };
      setImages(newImages);
    }
  };

  useEffect(()=>{
    setProductData({...productData,image:productImage})
  },[productImage])

  return (
    <div className="image-input-container">
      {Object.keys(images).map((fieldName) => (
        <div key={fieldName} className="form">
          <div
            className="image-upload-area"
            onClick={() => document.querySelector(`#${fieldName}`).click()}
          >
            <input
              type="file"
              accept="image/*"
              name={fieldName}
              id={fieldName}
              className="input-field"
              hidden
              onChange={(e) => handleImageChange(e, fieldName)}
            />
            {images[fieldName].image ? (
              <img
                src={images[fieldName].image}
                alt={images[fieldName].filename}
                height="98%"
                width="98%"
              />
            ) : (
              <IoCloudUploadOutline size={20} color="#1475cf" />
            )}
          </div>
          <p>{images[fieldName].filename}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageInput;
