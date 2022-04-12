import React from 'react';
import {Navbar} from '../organism/navbar';
import {TodoList} from '../organism/contoh';
import '../../index.css';

export let HomeTemplates = () => {
  return (
    <div className="w-[100%] h-[100%]">
      <Navbar />
      <TodoList />
    </div>
  );
};
