import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Countries from "./components/Countries";
import Country from "./components/Country";
import Navbar from "./components/Navbar";
import LogButton from "./LogButton";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div>
          <Switch>
            <Route component={Countries} path="/" exact />
            <Route component={About} path="/About" />
            <Route component={LogButton(Contact)} path="/Contact" />
            <Route component={Country} path="/:name" />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
