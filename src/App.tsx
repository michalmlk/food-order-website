import React from 'react';
import './App.css';
import Header from './components/Layout/Header/Header';
import PageContent from './components/Layout/PageContent/PageContent';
import MealList from './components/MealList/MealList';

function App() {
    return (
        <React.Fragment>
            <Header onCartOpen={() => console.log('cart opened')} />
            <PageContent>
                <MealList />
            </PageContent>
        </React.Fragment>
    );
}

export default App;
