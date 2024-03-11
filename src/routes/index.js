import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RequiresAuth from './RequiresAuth';
import { contentRoutes, dashboardRoutes, privateRoutes } from './Routes';
import { Admin, Dashboard, Home } from '../pages';

const Index = () => {
    
  return (
    <>
      <Routes>
      <Route path='/' element={<Home/>} index />
            {privateRoutes.map((route, idx) => (
                <Route key={idx} path={route.path} element={route.element} />
            ))}
            <Route element={<RequiresAuth />} >
              {contentRoutes.map((route, idx) => (
                <Route key={idx} path={route.path} element={route.element} />
              ))}
              <Route element={<Dashboard />}>
                <Route path='/dashboard' element={<Admin />} index />
                {dashboardRoutes.map((route, idx) => (
                  <Route key={idx} path={route.path} element={route.element} />
                ))}
              </Route>
            </Route>
      </Routes>
    </>
  );
};

export { Index };
