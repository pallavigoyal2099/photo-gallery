import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { wishListData } from "../store/wishlistReducer";

const WishlistPanel = ({ handleButtonClick, imageObj }) => {
  const wishlist = useSelector(wishListData);
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-gray-200 p-2 flex items-center justify-between ">
      <span className="text-gray-700">Add to Wishlist</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke={`text-${
          wishlist.some((wishlistItem) => wishlistItem.id === imageObj.id)
            ? "black-500"
            : "gray-500"
        }`}
        className={`w-6 h-6 cursor-pointer fill-current text-${
          wishlist.some((wishlistItem) => wishlistItem.id === imageObj.id)
            ? "black-500"
            : "gray-500"
        }`}
        onClick={() => handleButtonClick(imageObj)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
      </svg>
    </div>
  );
};

export default WishlistPanel;

WishlistPanel.propTypes = {
  handleButtonClick: PropTypes.func,
  imageObj: PropTypes.any,
};
