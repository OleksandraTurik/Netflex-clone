import { useState, useEffect } from "react";
import axios from "axios";
import { queryData, encodeQueryData } from "../helpers/queryUlR";

export const API_KEY = "5592ff8e73c8b02e28c3fbcebfe6dd2a";
export const BASE_URL = "https://api.themoviedb.org/3";

export const useRequest = (url: string, params?: queryData) => {
  const [data, setData] = useState();
  const requestURI = `${url}?${encodeQueryData({
    ...params,
    api_key: API_KEY,
  })}`;

  const fetchData = async (request_url: string) => {
    const res = await axios.get(request_url, {
      baseURL: BASE_URL,
    }); 
    setData(res.data.results ?? res.data);
  };

  useEffect(() => {
    fetchData(requestURI);
  }, [requestURI]);

  return { data };
};
