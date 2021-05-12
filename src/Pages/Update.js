import { Fragment } from "react";
import AddForm from "../components/forms/AddForm";

const Update = () => {
  return (
    <Fragment>
      <AddForm item="Weapon"></AddForm>
      <AddForm item="Character"></AddForm>
    </Fragment>
  );
};

export default Update;
