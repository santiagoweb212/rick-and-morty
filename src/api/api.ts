import apiFetch from "./axiosConfig";

interface CharacterParams extends Record<string, string | undefined> {
  gender?: string;
  status?: string;
  species: string;
  page?: string;
  name?: string;
}



const fetchData = async <T extends Record<string, string | undefined>>(
  endpoint: string,
  queryParams: T
) => {
  const queryString = Object.keys(queryParams)
    .map((key) => `${key}=${queryParams[key]}`)
    .join("&");

  const url = `${endpoint}?${queryString}`;
console.log(url)
  const results = await apiFetch.get(url);
  return results.data;
};

export const getCharacters = async (params: CharacterParams) => {
console.log(params)
  return fetchData("character/", params);
};

