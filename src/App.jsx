import React from 'react';
import './App.css'
import { Buscador } from './components/Buscador'
import { LibroList } from './components/LibroList';

export const App = () => {
  
  return (
    <>
      <Buscador/>
      <LibroList>
        
      </LibroList>
    </>
  );
}
