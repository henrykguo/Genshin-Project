import { Fragment, useCallback, useEffect, useState } from "react";
import HomePage from "../components/Home/HomePage";

const Home = () => {
  const [displayCharacters, setDisplayCharacters] = useState([]);
  const [displayChar, setDisplayChar] = useState();
  const [isDisplayChar, setIsDisplayChar] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCharacterHandler = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://genshin-data-71857-default-rtdb.firebaseio.com/character.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();

      const characterData = [];

      for (const key in data) {        
          characterData.push({
            id: key,
            character: data[key].item,
            description: data[key].description,
            rarity: data[key].rarity,
            image: data[key].image,
          });
      }
      setDisplayCharacters(characterData);
      const count = characterData.length;
      const index = Math.floor(Math.random() * count);
      const character = characterData[index];
      setDisplayChar(character);
      setIsDisplayChar(true);
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
      setError(error);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchCharacterHandler();
  }, [fetchCharacterHandler]);

  const loadNewPictureHandler = () => {
    const count = displayCharacters.length;
    let index = Math.floor(Math.random() * count);
    while (displayCharacters[index] === displayChar && count !== 1) {
      index = Math.floor(Math.random() * count);
    }
    setDisplayChar(displayCharacters[index]);
  };

  return (
    <Fragment>
      {!isDisplayChar && <button onClick={fetchCharacterHandler}></button>}
      {!isLoading && !error && isDisplayChar && (
        <HomePage
          character={displayChar}
          changePicture={loadNewPictureHandler}
        />
      )}
      {isLoading && <h1>LOADING...</h1>}
    </Fragment>
  );
};

export default Home;
