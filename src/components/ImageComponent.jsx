import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { toggleWishlist } from "../store/wishlistReducer";

import WishlistPanel from "./WishlistPanel";

const ImageComponent = ({
  image,
  height,
  width,
  alt,
  imageObj,
  smallHeight,
  smallWidth,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();

  const handleButtonClick = (imageObj) => {
    dispatch(toggleWishlist(imageObj));
    setIsHovered(false);
  };

  return (
    <div
      className={`group h-[${smallHeight}] md:h-[${height}] md:w-[${width}] w-[${smallWidth}] flex justify-center shadow-md text-center relative overflow-hidden rounded-md cursor-pointer my-5   `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ position: "relative" }}
    >
      <img
        src={image}
        alt={alt}
        className={`w-full h-full rounded-md ${
          isHovered ? "opacity-80" : "opacity-100"
        }`}
      />
      <div className="absolute bg-black opacity-50 transition-all duration-500 group-hover:opacity-80" />
      {isHovered && (
        <WishlistPanel
          handleButtonClick={handleButtonClick}
          imageObj={imageObj}
        />
      )}
    </div>
  );
};

export default ImageComponent;

ImageComponent.propTypes = {
  image: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  alt: PropTypes.string,
  imageObj: PropTypes.any,
  smallHeight: PropTypes.string,
  smallWidth: PropTypes.string,
};
