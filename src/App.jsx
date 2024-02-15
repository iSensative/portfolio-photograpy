import React from 'react';
import Header from './components/Header'
import { motion } from 'framer-motion';
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter as Route } from 'react-router-dom';
import AnimRoutes from './components/AnimRoutes';

const App = () => {
  return(
    <Route>
        <Header/>
        <AnimRoutes/>
    </Route>
  )
};

export default App;
