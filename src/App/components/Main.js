import { Route, Switch } from 'react-router-dom';


import Home from './Header/Home';
import About from './Header/About';
import Error from './Error';



const Main = () =>  {
    return (
        <main>
            <Switch>
                <Route exact path='/'> 
                    <Home/>
                </Route>
                <Route path='/about'> 
                    <About/>
                </Route>
                <Route path='*'> 
                    <Error/>
                </Route>
              </Switch>
   
        </main>

    );
}

export default Main