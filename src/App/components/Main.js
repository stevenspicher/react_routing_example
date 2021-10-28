import { Route } from 'react-router-dom';


import Home from './Header/Home';
import About from './Header/About';


const Main = () =>  {
    return (
        <main>
            
                <Route exact path='/'> 
                    <Home/>
                </Route>
                <Route path='/about'> 
                    <About/>
                </Route>
             
             
   
        </main>

    );
}

export default Main