import Card from "../ui/Card";
import classes from "./PokemonCard.module.css";

const PokemonCard = function ({ name, imgUrl, onClickHandler }) {
  return (
    <div className={classes.cardContainer}>
      <Card>
        <div className={classes.cardInside} onClick={onClickHandler}>
          <img src={imgUrl} alt={name} />
          <h1 className={classes.textName}>{name}</h1>
        </div>
      </Card>
    </div>
  );
};

export default PokemonCard;
