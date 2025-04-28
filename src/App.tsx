// import { Counter } from "./components/Counter"
import './styles/index.scss'
import { Suspense, useContext, useState } from "react";
import { Routes, Route, Link } from "react-router-dom"
import {AboutPageAsync} from "./pages/AboutPage/AboutPageAsync";
import {MainPageAsync} from "./pages/MainPage/MainPageAsync";
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';


export const App = () => {
  const {theme, toggleTheme} = useTheme();

  return <div 
    // className={`app ${theme}`}
    className={classNames('app', {}, [theme])}
  >
    {/* asddassad
    <Counter/> */}
    <button onClick={toggleTheme}>
      TOGGLE
    </button>
    <Link to='/'>
      Главная
    </Link>
    <Link to='/about'>
      О сайте
    </Link>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/about" element={<AboutPageAsync/>}/>
        <Route path="/" element={<MainPageAsync/>}/>
      </Routes>
    </Suspense>
  </div>
}