import React from 'react';
import {useRoutes} from 'react-router-dom'
import Home from "./pages/Home";
import Bmi from "./components/Bmi";
import Calc from "./components/Calc";
import Grade from "./components/Grade";
import Login from "./components/Login";    
import Counter from './components/Counter';
import Lotto from "./components/Lotto";

export default function App(){
  return useRoutes([
      {path : "/", element : <Home/>},
      {path : "bmi", element : <Bmi/>},
      {path : "calc", element : <Calc/>},
      {path : "grade", element : <Grade/>},
      {path : "login", element : <Login/>},
      {path : "counter", element : <Counter/>},
      {path : "lotto", element : <Lotto/>}
  ]);
}
