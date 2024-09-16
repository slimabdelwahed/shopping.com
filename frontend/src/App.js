import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomeScreen />} exact />
                <Route path="/product/:id" element={<ProductScreen />} />
                <Route path="/cart" element={<CartScreen />} />
            </Routes>
        </Router>
    );
}

export default App;
