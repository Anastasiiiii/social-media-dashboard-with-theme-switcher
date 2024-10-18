import './App.css';
import "./styles/Formulas.css";
import Header from './components/Header';
import SocialMediaCardsContainer from './components/SocialMediaCardsContainer';

function App() {


  return (
    <div className="App">
      <div className='app-header'>
        <Header />
      </div>
      <div className='app-cards-container'>
        <SocialMediaCardsContainer />
      </div>
    </div>
  );
}

export default App;
