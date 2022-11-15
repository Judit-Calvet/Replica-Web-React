import logo from './logo.svg';
import './App.css';
import Header from "./components/Organismos/Header";
import Content4 from "./components/Organismos/Content4";
import Footer from "./components/Organismos/Footer";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
     <Header />
     <Footer />
     <Content4 />

    </div>
  );
}

export default App;
