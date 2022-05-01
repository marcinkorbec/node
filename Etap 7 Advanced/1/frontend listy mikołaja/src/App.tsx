import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import {GiftsView} from "./views/GiftsView";
import {ChildView} from "./views/ChildView";
import {Header} from "./components/Header/Header";
import { NotFoundView } from './views/NotFoundView';
import {SingleGiftView} from "./components/SingleGiftView";

export const App = () => {
  return (
    <div className="App">
      <Header/>
      <hr/>
      <Routes>
        <Route path="/gift" element={<GiftsView/>}/>
        <Route path="/gift/:idOfGift" element={<SingleGiftView/>}/>
        <Route path="/child/" element={<ChildView/>}/>
        <Route path="/*" element={<NotFoundView/>}/>
      </Routes>
    </div>
  );
}

