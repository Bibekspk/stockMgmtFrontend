import {BrowserRouter,Route,Routes} from 'react-router-dom';
import { LandingPage } from './components/auth/landingPage/landingPage';
import {LoginComponent} from './components/auth/login/login';
import history from './history';

export const AppRouting = ()=>{
    return(
        <BrowserRouter history={history} >
            <Routes> {/* Switch ko updated name */}
            {/* exact has been removed and activeClassName has been removed in NavLink */}
                <Route path="/" element={<LandingPage/>} > </Route>
                <Route path="/login" element={<LoginComponent/>} > </Route>
            </Routes>
        </BrowserRouter>
    )
}