import './App.css';
import "./styles/Formulas.css";
import Header from './components/Header';
import SocialMediaCardsContainer from './components/SocialMediaCardsContainer';
import OverviewCardsContainer from './components/OverviewCardsContainer';

function App() {


  return (
    <div className="App">
      <div className='app-header'>
        <Header />
      </div>
      <div className='app-cards-container'>
        <SocialMediaCardsContainer />
      </div>
      <div className='overview-part'>
        <h3>Overview - Today</h3>
      </div>
      <div>
        <OverviewCardsContainer />
      </div>
    </div>
  );
}

export default App;
