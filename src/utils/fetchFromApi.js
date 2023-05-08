import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7579baf141mshf52bb746ebfd1f9p1ff06ejsn019364df3f1e',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

export const fetchFromAPI = async (url) => {
  try {
    const response = await fetch(`${BASE_URL}/${url}&maxResults=55`, options);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
};