import logo from "./logo.png";
import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid mt-3 mb-5" alt="logo" />
        </header>
        <main>
          <Search />
        </main>
        <footer className="mt-3">Coded by Daryna Lytvynenko</footer>
      </div>
    </div>
  );
}

export default App;
