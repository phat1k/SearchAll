
import Header from './components/header/';
import SearchBar from './components/searchBar';
import SideMenu from './components/SideMenu'
import HomePage from './pages/home/index'
import './assets/css/style.scss';
import Footer from './components/Footer';
import Category from './pages/category'
import MainLayout from './layout/MainLayout'
import { Checkout } from './pages/checkout';
import Login from './pages/login';
import Test from './pages/test'
import Product from './pages/product'
import {Provider} from 'react-redux';
import store from './store'
import {
    BrowserRouter,
    Route,
    Routes,
    Navigate,
    useParams,
    Link,
    Outlet,
} from 'react-router-dom'
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Provider store = {store}>
            <main id="main-content">
              <Routes>
                  <Route  path="/login" element={<Login />} />
                <Route path="/" element={<MainLayout/>}>
                  <Route index element={<HomePage/>} />
                  <Route  path="/category" element={<Category />} />
                  <Route  path="/checkout" element={<Checkout />} />

                </Route>
                  <Route  path="/test" element={<Test />} />
                  <Route  path="/product" element={<Product />} />

                
              </Routes>
            </main>
            </Provider>
        </BrowserRouter>
    </div>
  );
}
export default App;
