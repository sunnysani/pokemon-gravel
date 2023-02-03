import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import PokemonCard from "./PokemonCard";
import classes from "./PokemonList.module.css";
import PageSelector from "./PageSelector";
import PokemonDetail from "./PokemonDetail";
import {
  getPaginationData,
  getDetailPokemonByUrl,
} from "../../util/usePokemonAPI";

const PokemonList = function ({ page }) {
  const navigate = useNavigate();

  const [limit, setLimit] = useState(5);
  const [items, setItems] = useState([]);
  const [maxPage, setMaxPage] = useState(1);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    async function getData() {
      const paginationData = await getPaginationData(limit, (page - 1) * limit);

      setMaxPage(Math.ceil(paginationData.count / limit));

      const newItems = [];
      for (let i = 0; i < paginationData.results.length; i++) {
        let pokemonData = await getDetailPokemonByUrl(
          paginationData.results[i].url
        );
        const newPokemon = {
          id: pokemonData.id,
          name: pokemonData.name,
          imgUrl:
            pokemonData.sprites.front_default ||
            "https://lh3.googleusercontent.com/Vo3Lue3TWDEglIHr678A3IHmTbjN_dN8O8vhq0ZECyCAO3bbQyygPwCG4v_iyvDPmSI=w2400",
          types: pokemonData.types,
          weight: pokemonData.weight,
          height: pokemonData.height,
          abilities: pokemonData.abilities,
          moves: pokemonData.moves,
          stats: pokemonData.stats,
        };
        newItems.push(newPokemon);
      }

      setItems(newItems);
    }

    getData();
  }, [page, limit]);

  useEffect(() => {
    navigate(`/pages/1`);
  }, [limit]);

  return (
    <div className={classes.listContainer}>
      <PokemonDetail
        selectedPokemon={selectedPokemon}
        handleExit={() => setSelectedPokemon(null)}
      />
      {items.map((item) => (
        <PokemonCard
          name={item.name}
          imgUrl={item.imgUrl}
          onClickHandler={() => setSelectedPokemon(item)}
          key={item.name}
        />
      ))}
      <PageSelector page={page} maxPage={maxPage} setLimitHandler={setLimit} />
    </div>
  );
};

export default PokemonList;
