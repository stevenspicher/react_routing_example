import { Route, Switch } from 'react-router-dom';


import Home from './Header/Home';
import About from './Header/About';
import Index from './Header/Index'


const Main = () =>  {
    return (
        <main>

                <Route exact path='/'> 
                    <Home/>
                </Route>
                <Route path='/about'> 
                    <About/>
                </Route>
                <Route path='/index'> 
                    <Index/>
                </Route>

                 
              
             
        </main>

    );
}

export default Main