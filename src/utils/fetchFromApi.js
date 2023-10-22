import { categories } from "./constants";
export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  try {
    const response = await fetch(`${BASE_URL}/${url}&maxResults=55`, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

//optimized version of the fisher-yates shuffle
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const initialFeed = async () => {
  //can only take 3 categories because of the free tier limitation of RapidApi, feel free to change
  const shuffledCategories = shuffleArray([...categories.slice(1)]).slice(0, 3);
  try {
    const promises = shuffledCategories.map(async (category) => {
      const response = await fetch(
        `${BASE_URL}/search?part=snippet&q=${category.name}&maxResults=10`,
        options
      );
      const data = await response.json();
      return data;
    });

    const results = await Promise.all(promises);
    // Mix the results into one response and shuffle
    const mixedResults = shuffleArray(
      results[0].items.concat(results[1].items, results[2].items)
    );
    return mixedResults;
  } catch (e) {
    console.error(e);
  }
};
