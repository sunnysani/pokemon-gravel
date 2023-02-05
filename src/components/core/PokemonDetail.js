import Card from "../ui/Card";
import Modal from "../ui/Modal";
import classes from "./PokemonDetail.module.css";

const PokemonDetail = function ({ selectedPokemon, handleExit }) {
  function getTypeString() {
    let typeLst = [];
    selectedPokemon.types.forEach((element) => {
      typeLst.push(element.type.name);
    });
    return typeLst.join(", ");
  }

  console.log(selectedPokemon);

  if (selectedPokemon != null)
    return (
      <Modal closeHandler={handleExit}>
        <Card>
          <div className={classes.container}>
            <img src={selectedPokemon.imgUrl} alt={selectedPokemon.name}></img>
            <h1 className={classes.pokemonName}>{selectedPokemon.name}</h1>
            <h3 className={classes.pokemonType}>Type: {getTypeString()}</h3>
            <div className={classes.flex}>
              <div>
                <h3>Height</h3>
                <p>{selectedPokemon.height}</p>
              </div>
              <div>
                <h3>Weight</h3>
                <p>{selectedPokemon.weight}</p>
              </div>
            </div>
            <br />
            <div className={classes.pokemonStats}>
              <table>
                <thead>
                  <tr>
                    <th>Stat Name</th>
                    <th>Base Stat</th>
                    <th>Effort</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedPokemon.stats.map((item) => (
                    <tr key={item.stat.url}>
                      <td key={item.stat.name}>{item.stat.name}</td>
                      <td key={item.base_stat}>{item.base_stat}</td>
                      <td key={item.effort}>{item.effort}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <br />
            <div className={classes.pokemonMoves}>
              <h3>Moves</h3>
              <ul>
                {selectedPokemon.moves.map((item) => (
                  <li key={item.move.name}>{item.move.name}</li>
                ))}
              </ul>
            </div>
            <br />
            <div className={classes.pokemonAbilities}>
              <h3>Abilities</h3>
              <ul>
                {selectedPokemon.abilities.map((item) => (
                  <li key={item.ability.name}>{item.ability.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      </Modal>
    );
  else return null;
};

export default PokemonDetail;
