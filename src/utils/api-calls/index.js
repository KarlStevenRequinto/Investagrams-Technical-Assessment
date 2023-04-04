const requestOptionsGet = {
  method: "GET",
  redirect: "follow",
};

const getTrending = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/trending/all/day?api_key=28ec9bff5cf02ca71524de9d46113f70",
    requestOptionsGet
  );
  return response;
};

const getImage = async (backdrop, size) => {
  const response = await fetch(
    `https://image.tmdb.org/t/p/w${size}/${backdrop}`,
    requestOptionsGet
  );
  return response;
};

export { getTrending, getImage };
