import { Switch } from "react-router-dom";
import Details from "../details/Details";
import Home from "./Home";

export default function Route(){
    return(
    <Switch>
      <Route to="/" component={Home}></Route>
      <Route to="/details" component={Details}></Route>
    </Switch>
    )
}