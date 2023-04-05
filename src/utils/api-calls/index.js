const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "api_key=28ec9bff5cf02ca71524de9d46113f70";
const requestOptionsGet = {
  method: "GET",
  redirect: "follow",
};

const getTrending = async () => {
  const response = await fetch(
    `${BASE_URL}/trending/all/day?${API_KEY}`,
    requestOptionsGet
  );
  return response;
};

const getImage = async (backdrop, size) => {
  const response = await fetch(
    `https://image.tmdb.org/t/p/w${size}${backdrop}`,
    requestOptionsGet
  );
  return response;
};

const getUpcoming = async () => {
  const response = await fetch(
    `${BASE_URL}/movie/upcoming?${API_KEY}&language=en-US&page=1`,
    requestOptionsGet
  );

  return response;
};

const getPopular = async () => {
  const response = await fetch(
    `${BASE_URL}/movie/popular?${API_KEY}&language=en-US&page=1`,
    requestOptionsGet
  );
  return response;
};

const getTopRated = async () => {
  const response = await fetch(
    `${BASE_URL}/movie/top_rated?${API_KEY}&language=en-US&page=1`,
    requestOptionsGet
  );
  return response;
};

export { getTrending, getImage, getUpcoming, getPopular, getTopRated };
