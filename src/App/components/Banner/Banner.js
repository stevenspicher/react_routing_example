import { Route, Switch } from 'react-router-dom';

import News from './News';
import Contact from './Contact';
import AboutBanner from './About_Banner';
import HomeBanner from './Home_Banner';
import Error from '../Error'

const Banner = () => {
    return (
        <div className='banner'>
            <Switch>
                <Route exact path='/'>
                        <HomeBanner/>
                    </Route>
                    <Route exact path='/about'>
                        <AboutBanner/>
                    </Route>
                <Route path='/about/news'>
                        <News/>
                </Route>
                <Route path='/about/contact'> 
                    <Contact/>
                </Route>
                <Route path='/about/contact'> 
                    <Contact/>
                </Route>
                <Route path='*'> 
                    <Error/>
                </Route>
            </Switch>
        </div>
    );
}

export default Banner