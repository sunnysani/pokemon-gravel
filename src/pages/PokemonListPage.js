import { useParams } from "react-router-dom";
import PokemonList from "../components/core/PokemonList";

function PokemonListPage() {
  const { page } = useParams();

  return (
    <div>
      <PokemonList page={page} />
    </div>
  );
}

export default PokemonListPage;
