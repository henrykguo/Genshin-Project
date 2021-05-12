import { Fragment, useCallback, useEffect, useState } from "react";
import HomePage from "../components/Home/HomePage";

const Home = () => {
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
        if (data[key].rarity === "5") {
          characterData.push({
            id: key,
            character: data[key].item,
            description: data[key].description,
            rarity: 5,
            image: data[key].image,
          });
        }
      }
      const count = characterData.length;
      console.log(count);
      const index = Math.floor(Math.random() * count);
      console.log(index);
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

  return (
    <Fragment>
      {!isDisplayChar && <button onClick={fetchCharacterHandler}></button>}
      {!isLoading && !error && isDisplayChar && <HomePage character={displayChar}/>}
      {isLoading && <h1>LOADING...</h1>}
    </Fragment>
  );
};

export default Home;
