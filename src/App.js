import logo from './logo.svg';
import './App.css';
import Header from "./components/Organismos/Header";
import Content3 from "./components/Organismos/Content3";
import Content4 from "./components/Organismos/Content4";
import Content5 from "./components/Organismos/Content5";
import Footer from "./components/Organismos/Footer";
import Input from "./components/Organismos/Input"

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
     <Input />
     <Content3 />
     <Content4 />
     <Content5 />
    </div>
  );
}

export default App;
