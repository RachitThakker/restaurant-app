import "./App.css";
import Intro from "./components/Intro/Intro";
import Main from "./components/Main/Main";
import End from "./components/End/End";

function App() {
  return (
    <div className="App">
      <title>PizzaTime Restaurant App</title>
      <Intro />
      <Main />
      <End />
    </div>
  );
}

export default App;
