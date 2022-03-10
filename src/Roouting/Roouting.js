import React,{lazy,Suspense} from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
// import About from '../Components/About'
import Cart from '../Components/Cart'
import Contact from '../Components/Contact'
// import Help from '../Components/Help'
import Home from '../Components/Home'
import PNF from '../Components/PNF'
import Login from '../Components/Regisatration/Login'
import Regis from '../Components/Regisatration/Regis'
import Feedback from '../Feedback'
import Header from '../LayOut/Header'
import Unauth from '../LayOut/Unauth'
import Payment from '../Product/Payment'
import ProdCat from '../Product/ProdCat'
import ProdDet from '../Product/ProdDet'
import Protected from './Protected'

const About=lazy(()=>import('../Components/About'))
const Help=lazy(()=>import('../Components/Help'))

const Roouting = () => {
  return (
    <div>
        <Router>
            <Header />
            <Suspense fallback={<h1> Loading...</h1>}>
            <Routes>
                <Route path="" element={<Home/>}></Route>
                {/* <Route path="Catagory/:id" element={<ProdCat/>}></Route>
                <Route path="Details/:id/:did" element={<ProdDet/>}></Route> */}
                <Route path="Registration" element={<Regis/>}></Route>
                <Route path="Login" element={<Login/>}></Route>
                <Route path="About" element={<About/>}></Route>
                <Route path="Contact" element={<Contact/>}></Route>
                <Route path="payment" element={<Payment/>}></Route>
                <Route path="Help" element={<Help/>}></Route>
                <Route path="Unauth" element={<Unauth />}></Route>
                <Route path="Feedback" element={<Feedback />}></Route>
                <Route path="Cart" element={<Cart />}></Route>
                
                <Route element={<Protected />}>
                <Route path="Catagory/:id" element={<ProdCat/>}></Route>
                <Route path="Details/:id/:did" element={<ProdDet/>}></Route>
                </Route>
                <Route path="*" element={<PNF />}></Route>
            </Routes>
            </Suspense>
        </Router>
       
    </div>
  )
}

export default Roouting