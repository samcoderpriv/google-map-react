import React, {Component} from 'react';
import { useSelector } from "react-redux";
import './App.scss';
import Search from "./views/search";
import Result from "./views/result";
import { ToastContainer } from 'react-toastify';

const App = () => {
  const { result } = useSelector((state)=>state.main);

  return (
      <div>
        { result !== null ? <Result/> : <Search/> }
        <ToastContainer />
    </div>
  );
}

export default App;
