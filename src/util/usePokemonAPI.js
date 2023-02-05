import axios from "axios";

export async function getPaginationData(limit, offset) {
  const getPaginationResp = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
  );

  return getPaginationResp.data;
}

export async function getDetailPokemonByUrl(url) {
  const getDetailResp = await axios.get(url);

  return getDetailResp.data;
}
