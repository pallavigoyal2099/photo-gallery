import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { wishListData } from "../store/wishlistReducer";

const WishlistPanel = ({ handleButtonClick, imageObj }) => {
  const wishlist = useSelector(wishListData);
  const isWishlisted = wishlist.some(
    (wishlistItem) => wishlistItem.id === imageObj.id
  );
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-gray-200 p-2 flex items-center justify-between ">
      <span className="text-gray-700">Add to Wishlist</span>

      <div onClick={() => handleButtonClick(imageObj)}>
        {!isWishlisted ? (
          <img src="heart.svg" alt="grey-heart" />
        ) : (
          <img src="heart (1).svg" className="" alt="red-heart" />
        )}
      </div>
    </div>
  );
};

export default WishlistPanel;

WishlistPanel.propTypes = {
  handleButtonClick: PropTypes.func,
  imageObj: PropTypes.any,
};
