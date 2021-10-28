import './App.css';
import Main from './components/Main';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Body from './components/Body/Body';






const App = () => {
 
  return (
    <>
    <Banner/>
    <div className="menu">
      <Header/> 
      <Main /> 
    </div>  
    <Body/>
          
    </>
  );
}

export default App;
