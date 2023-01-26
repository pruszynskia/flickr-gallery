import { API_BASE_URL, API_KEY } from "./apisConfig";

const DEFAULT_PER_PAGE = 10;

const photosData = (tag: string, page: number) => async () => {
  const defaultTag = "sports";
  const url = `${API_BASE_URL}rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=${
    tag ? tag : defaultTag
  }&per_page=${DEFAULT_PER_PAGE}&page=${page}&format=json&nojsoncallback=1`;
  const data = await fetch(url)
    .then((response) => response.json())
    .catch((err) => console.log(err));
  return data;
};
export default photosData;
