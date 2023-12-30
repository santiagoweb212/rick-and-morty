import apiFetch from "./axiosConfig";

export const getCharacters = async (
  gender = "",
  status = "",
  species = "",
  page = "",
  name = ""
) => {
  const url = `character/?page=${page}&status=${status}&gender=${gender}&species=${species}&name=${name}`;
  const results = await apiFetch.get(url);
  return results.data;
};
