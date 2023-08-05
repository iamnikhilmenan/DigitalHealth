const api = 'https://api.themoviedb.org/3';

// The api key is ok to be exposed, it's free and only for self study. I know that the corretly way is to store in a .env file.
const key = 'fb60f5f8d133cb758eee4df268b98d83';

const defaultContent = {
  api_key: key,
  language: 'en-US',
};

function queryString(obj: {}) {
  return Object.entries(obj)
    .map(([index, val]) => `${index}=${val}`)
    .join('&');
}

export async function requestForMovies(
  url: string,
  content = {},
  debug = false,
) {
  const obj = {...defaultContent, ...content};

  const response = await fetch(`${api}/${url}?${queryString(obj)}`);
  const data = await (debug ? response.status : response.json());

  return data;
}

export const getImageApi = (path: string, key = 'uri', width = 'w500') =>
  path !== null
    ? {[key]: `https://image.tmdb.org/t/p/${width}${path}`}
    : require('../assets/images/not_available.jpg');
