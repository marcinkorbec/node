import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import {GiftsView} from "./views/GiftsView";
import {TestView} from "./views/TestView";
import {Header} from "./components/Header/Header";
import { NotFoundView } from './views/NotFoundView';

export const App = () => {
  return (
    <div className="App">
      <Header/>
      <hr/>
      <Routes>
        <Route path="/gift" element={<GiftsView/>}/>
        <Route path="/tests/:foobar" element={<TestView/>}/>
        <Route path="/*" element={<NotFoundView/>}/>
      </Routes>
    </div>
  );
}

