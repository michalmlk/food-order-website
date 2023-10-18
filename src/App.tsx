import './App.css';
import Header from './components/Layout/Header/Header';
import PageContent from './components/Layout/PageContent/PageContent';
import MealList from './components/MealList/MealList';
import CartProvider from './context/CartContext';
import { worker } from './mocks/browser';

function App() {
    return (
        <CartProvider>
            <Header />
            <PageContent>
                <MealList />
            </PageContent>
        </CartProvider>
    );
}

export default App;
