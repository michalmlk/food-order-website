import { ToastContainer } from 'react-toastify';
import Header from './components/Layout/Header/Header';
import PageContent from './components/Layout/PageContent/PageContent';
import MealList from './components/MealList/MealList';
import CartProvider from './context/CartContext';

function App() {
    return (
        <CartProvider>
            <ToastContainer autoClose={2000} theme="dark" />
            <Header />
            <PageContent>
                <MealList />
            </PageContent>
        </CartProvider>
    );
}

export default App;
