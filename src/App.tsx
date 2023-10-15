import React from 'react';
import './App.css';
import Header from './components/Layout/Header/Header';

function App() {
    return (
        <React.Fragment>
            <Header onCartOpen={() => console.log('cart opened')} />
        </React.Fragment>
    );
}

export default App;
