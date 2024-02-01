import React, { useEffect, useState } from "react";
import Search from "./Search";
import ImageComponent from "./ImageComponent";
import useApi from "../hooks/useApi";
import axios from "axios";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [randomImage, setRandomImage] = useState(null);

  const fetchRandomImage = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_ACCESS_KEY}`
      );
      setRandomImage(response.data);
    } catch (error) {
      console.error("Error fetching random image:", error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const { data: searchResults, isLoading } = useApi(
    `https://api.unsplash.com/search/photos?page=1&query=${searchTerm}&client_id=${process.env.REACT_APP_ACCESS_KEY}`,
    searchTerm && searchTerm.length > 0 ? searchTerm : null
  );

  useEffect(() => {
    fetchRandomImage();
  }, []);

  return (
    <div className="  md:w-[60rem] w-[20rem] h-full  md:h-[50rem] flex items-center flex-col my-12">
      <div className="flex items-center flex-col pt-8">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl sm:px-6 ">
          Photo Gallery
        </h1>
        <p className="mb-6 text-lg text-center font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 px-8 ">
          Immerse yourself in a captivating visual experience with our photo
          gallery, showcasing moments that tell a thousand stories.
        </p>
      </div>

      <Search onChange={(e) => setSearchTerm(e.target.value)} />

      {loading && (
        <div className="h-[20rem] w-full md:h-[30rem]  flex items-center justify-center">
          <img height={40} width={40} src="loading.gif" alt="loading..." />
        </div>
      )}

      {searchTerm?.length > 0 ? (
        <div className="md:w-[60rem] w-[20rem] mb-4  ">
          <div>
            {searchResults?.results?.length > 0 ? (
              <div className="grid md:grid-cols-4 gap-6  grid-cols-2 mb-16">
                {searchResults.results.map((result) => (
                  <ImageComponent
                    key={result.id}
                    smallHeight={"20rem"}
                    smallWidth={"15rem"}
                    imageObj={result}
                    image={result.urls.small}
                    alt={result.alt_description}
                    height="0"
                    width="0"
                  />
                ))}
              </div>
            ) : (
              !isLoading &&
              !loading && (
                <div className="w-full flex items-center justify-center ">
                  <img src="noImage.jpeg" alt="no_image" />
                </div>
              )
            )}
          </div>
        </div>
      ) : randomImage ? (
        <ImageComponent
          key={randomImage?.id}
          height={"30rem"}
          width={"60rem"}
          imageObj={randomImage}
          image={randomImage?.urls?.regular}
          alt={randomImage?.alt_description}
          smallHeight="0"
          smallWidth="0"
        />
      ) : (
        !isLoading &&
        !loading && (
          <div className="w-full flex items-center justify-center ">
            <img src="noImage.jpeg" alt="no_image" />
          </div>
        )
      )}
    </div>
  );
};

export default Home;
