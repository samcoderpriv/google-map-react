import React, {Component} from 'react';
import './App.scss';
import Search from "./views/search";
import { ToastContainer } from 'react-toastify';

class App extends Component {
    render() {
        return (
          <div>
            <Search/>
            <ToastContainer />
        </div>
        );
    }
}

export default App;
