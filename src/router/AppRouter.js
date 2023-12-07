import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddGame from '../components/AddGame';
import GamesList from '../components/GamesList';
import Header from '../components/Header';

const AppRouter = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div>
                <Header />
                <div className="main-content">
                    <Routes>
                        <Route element={<GamesList />} path='/' exact={true} />
                        <Route element={<AddGame />} path='/add' />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;