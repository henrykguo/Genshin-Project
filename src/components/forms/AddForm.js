import classes from "./AddForm.module.css";
import Card from "../UI/Card";
import { useRef } from "react";

const AddForm = (props) => {
  const descriptionRef = useRef('');
  const itemRef = useRef('');
  const imageRef = useRef('');
  const rarityRef = useRef(0);

  const submitFormHandler = (event) => {
    event.preventDefault();

    const item = {
      item: itemRef.current.value,
      description: descriptionRef.current.value,
      rarity: rarityRef.current.value,
      image: imageRef.current.value
    }
    props.onAddItem(item);
    
    itemRef.current.value = '';
    descriptionRef.current.value = '';
    rarityRef.current.value = '';
    imageRef.current.value = ''; 
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitFormHandler}>
        <div className={classes.control}>
          <label htmlFor="item">{props.item}</label>
          <input id="item" type="text" ref={itemRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" rows="5" ref={descriptionRef}></textarea>
        </div>
        <div className={classes.control}>
          <label htmlFor="rarity">Rarity</label>
          <input id="rarity" type="number" ref={rarityRef} min='3' max='5'></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Image Url</label>
          <input id="image" type="text" ref={imageRef}></input>
        </div>
        <div className={classes.actions}>
          <button type="submit" className={classes.btn}>Add {props.item}</button>
        </div>
      </form>
    </Card>
  );
};

export default AddForm;
