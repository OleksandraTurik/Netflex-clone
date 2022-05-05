import axios from "axios";

export const API_KEY = "5592ff8e73c8b02e28c3fbcebfe6dd2a";
export const BASE_URL = "https://api.themoviedb.org/3";

export const movieAPI = axios.create({
  baseURL: BASE_URL,
});
