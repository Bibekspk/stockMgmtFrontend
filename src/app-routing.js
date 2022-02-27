import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom';
import { LandingPage } from './components/pages/landingPage/landingPage'
import {LoginComponent} from './components/auth/login/login';
import { HomePage } from './components/pages/homePage/homePage';
import navigate from './history';
import { SideBar } from './components/shared/sidebar/sidebar';
import { Topnavbar } from './components/shared/navbar/navbar';
import { AddItemType } from './components/pages/stocks/AddItemType/addItemType';
import { AddStock } from './components/pages/stocks/AddStocks/addStock';
import { AddItems } from './components/pages/Items/AddItems/addItems';
import { StockSale } from './components/pages/stocks/StockSales/stockSales';

const ProtectedRoute = (props)=>{ // yesma <ProtectedRoute/> ra component aaucha props.children ma 

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

const Error=()=>{
    return (
        <div>
              <Topnavbar/>
            <SideBar>
                <h1 className='text-center'>Page not found 404</h1>
            </SideBar>
        </div>
    )
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
                <Route path='/addItemType' element={<ProtectedRoute><AddItemType/></ProtectedRoute>}></Route>
                <Route path="/addItem" element={<ProtectedRoute><AddItems/></ProtectedRoute>}></Route>
                <Route path = "/saleItems" element={<ProtectedRoute><StockSale/></ProtectedRoute>}></Route>
                <Route path="*" element={<Error/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}