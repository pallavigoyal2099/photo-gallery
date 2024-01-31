import { useState, useEffect } from "react";
import axios from "axios";

const useApi = (url, searchTerm) => {
  const [data, setData] = useState(null);
  const [isLoading,setIsLoading] =useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (searchTerm!==null) {
          setIsLoading(true)
          let response = await axios.get(url);
          setData(response.data);
        }
      } catch (error) {
        console.error(error);
        setIsLoading(false)
      }finally{
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, searchTerm]);

  return { data,isLoading };
};

export default useApi;
