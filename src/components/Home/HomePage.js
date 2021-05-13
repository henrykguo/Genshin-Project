import classes from "./HomePage.module.css";
import { Fragment } from "react";
import fourStars from "../../pictures/fourStars.png";
import fiveStars from "../../pictures/fiveStars.png";

const HomePage = (props) => {
  const onChangeHandler = () => {
    props.changePicture();
  };

  const stars = props.character.rarity === "5" ? fiveStars : fourStars;

  return (
    <Fragment>
      <div className={classes.centered}>
        <h1 className={classes.heading}>Welcome to my Random Genshin Site!</h1>
      </div>
      <figure className={classes.image}>
        <img
          src={props.character.image}
          alt={props.character.description}
          className={classes.character}
        />
        <img
          src={stars}
          alt={props.character.rarity}
          className={classes.stars}
        ></img>
        <figcaption>{props.character.description}</figcaption>
      </figure>
      <div className={classes.centered}>
        <button onClick={onChangeHandler} className={classes.btn}>
          Display Another Random Character
        </button>
      </div>
    </Fragment>
  );
};

export default HomePage;
