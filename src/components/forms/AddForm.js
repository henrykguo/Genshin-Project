import classes from "./AddForm.module.css";
import Card from "../UI/Card";

const AddForm = (props) => {
  return (
    <Card>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="item">{props.item}</label>
          <input id="item" type="text"></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" rows="5"></textarea>
        </div>
        <div className={classes.control}>
          <label htmlFor="rarity">Rarity</label>
          <input id="rarity" type="number"></input>
        </div>
        <div className={classes.actions}>
          <button className={classes.btn}>Add {props.item}</button>
        </div>
      </form>
    </Card>
  );
};

export default AddForm;
