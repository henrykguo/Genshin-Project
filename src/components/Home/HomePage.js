import { Fragment} from "react";

const HomePage = (props) => {
  return (
    <Fragment>
      <div>
        <img src={props.character.image} alt={props.character.description} />
      </div>
      <div>
        <p>{props.character.description}</p>
      </div>
    </Fragment>
  );
};

export default HomePage;
