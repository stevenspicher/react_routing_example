import './App.css';
import Main from './components/Main';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';







const App = () => {
 
  return (
    <>
    <Banner/>
    <div className="menu">
      <Header/> 
      <Main /> 
    </div>      
    </>
  );
}

export default App;
