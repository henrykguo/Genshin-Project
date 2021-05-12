import { Redirect, Switch } from "react-router";
import { Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./Pages/Home";
import Update from "./Pages/Update";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home"></Redirect>
        </Route>
        <Route path="/weapons"></Route>
        <Route path="/characters"></Route>
        <Route path="/home"><Home></Home></Route>
        <Route path='/update'><Update/></Route>
      </Switch>
    </Layout>
  );
}

export default App;
