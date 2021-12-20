import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom';
import { LandingPage } from './components/pages/landingPage/landingPage'
import {LoginComponent} from './components/auth/login/login';
import { HomePage } from './components/pages/homePage/homePage';
import navigate from './history';
import { SideBar } from './components/shared/sidebar/sidebar';
import { Topnavbar } from './components/shared/navbar/navbar';
import { AddStock } from './components/pages/stocks/AddStock/addStock';

const ProtectedRoute = (props)=>{ // yesma <ProtectedRoute/> aaucha props.children ma 

    return localStorage.getItem("token") ?
        <div>
            <Topnavbar/>
            <SideBar>
                {props.children}
            </SideBar>
        </div>
        :
        <Navigate to="/" />
}

export const AppRouting = ()=>{
    return(
        <BrowserRouter history={navigate} >
            <Routes> {/* Switch ko updated name */}
            {/* exact has been removed and activeClassName has been removed in NavLink */}
                <Route path="/" element={<LandingPage/>} > </Route>
                <Route path="/login" element={<LoginComponent/>} > </Route>
                <Route path="/home" element={<ProtectedRoute><HomePage/></ProtectedRoute>}> </Route>
                <Route path='/addStock' element={<ProtectedRoute><AddStock/></ProtectedRoute>}></Route>
            </Routes>
        </BrowserRouter>
    )
}