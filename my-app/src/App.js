import './App.css';
import {Logo} from"./components/Logo";
import {Navigation} from "./components/Navigation";
import {CoinFlip} from "./components/CoinFlip";


function App() {
  const today = new Date ();
  return (
    <div className="App">
      <header className="App-header">
        <Logo></Logo>
        <h1> Hello word!</h1>
        <p>{today.toLocaleString()}</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <CoinFlip></CoinFlip>
        <Navigation></Navigation>
      </header>
    </div>
  );
}

export default App;
