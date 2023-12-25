import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Posts from '../Pages/Posts';
import { routes } from '../routes/routes';


const AppRouter = () => {
    return (
        <Routes>
            {routes.map(route => (
                <Route key={route.path} path={route.path} element={React.createElement(route.element)} exact={route.exact} />
            ))}
            <Route path='*' element={<Posts />} />
        </Routes>
    );
};

export default AppRouter;


