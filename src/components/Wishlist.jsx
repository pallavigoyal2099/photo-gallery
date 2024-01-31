import React from "react";
import { wishListData } from "../store/wishlistReducer";
import { useSelector } from "react-redux";
import ImageComponent from "./ImageComponent";
import Home from "./Home";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const wishlist = useSelector(wishListData);
  const reversedData = wishlist.slice().reverse();
  return (
    <div className="mb-16 w-[60rem] my-12 ">
      <div className="flex items-center flex-col pt-8">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl sm:px-6 ">
          My Wishlist
        </h1>
      </div>
      {reversedData.length > 0 ? (
        <div className="grid md:grid-cols-4 gap-4  grid-cols-2 mx-4">
          {reversedData.map((result) => (
            <ImageComponent
              key={result.id}
              smallHeight={"20rem"}
              smallWidth={"10rem"}
              height="0"
              width="0"
              imageObj={result}
              image={result.urls.small}
              alt={result.alt_description}
            />
          ))}
        </div>
      ) : (
        <div className="text-center bold text-xl my-16">
          Oops!!No item in wishlist, Please Like some thing from{" "}
          <Link className="text-underlined text-blue-700" to={"/"}>
            here{" "}
          </Link>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
