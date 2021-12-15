import {BrowserRouter,Route,Routes} from 'react-router-dom';
import { LandingPage } from './components/pages/landingPage/landingPage'
import {LoginComponent} from './components/auth/login/login';
import { HomePage } from './components/pages/homePage/homePage';
import navigate from './history';

export const AppRouting = ()=>{
    return(
        <BrowserRouter history={navigate} >
            <Routes> {/* Switch ko updated name */}
            {/* exact has been removed and activeClassName has been removed in NavLink */}
                <Route path="/" element={<LandingPage/>} > </Route>
                <Route path="/login" element={<LoginComponent/>} > </Route>
                <Route path="/home" element={<HomePage/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}