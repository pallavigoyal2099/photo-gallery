import React from "react";
import { wishListData } from "../store/wishlistReducer";
import { useSelector } from "react-redux";
import ImageComponent from "./ImageComponent";

const Wishlist = () => {
  const wishlist = useSelector(wishListData);
  return (
    <div className="mb-16 w-[50rem]">
      <div className="flex items-center flex-col pt-8">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl sm:px-6 ">
          My Wishlist
        </h1>
      </div>
      <div className="grid md:grid-cols-4 gap-4  grid-cols-2 mx-4">
        {wishlist.map((result) => (
          <ImageComponent
            key={result.id}
            height={"14rem"}
            width={"4rem"}
            smallHeight={"10rem"}
            smallWidth={"10rem"}
            imageObj={result}
            image={result.urls.small}
            alt={result.alt_description}
          />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
