import { Fragment } from "react";
import AddForm from "../components/forms/AddForm";

const Update = () => {
    async function addWeaponHandler(item) {
        const url = `https://genshin-data-71857-default-rtdb.firebaseio.com/weapon.json`;
        console.log(url);
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                'Content-type' : 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
    }

    async function addCharacterHandler(item) {
        const url = `https://genshin-data-71857-default-rtdb.firebaseio.com/character.json`;
        console.log(url);
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                'Content-type' : 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
    }

  return (
    <Fragment>
      <AddForm item="Weapon" onAddItem={addWeaponHandler}></AddForm>
      <AddForm item="Character" onAddItem={addCharacterHandler}></AddForm>
    </Fragment>
  );
};

export default Update;
