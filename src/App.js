import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/Header'
import CryptoList from './components/cryptoList/CryptoList';
import CryptoCalculator from './components/cryptoCalculator/CryptoCalculator';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <Header />
                <Routes>
                    <Route exact path='/' element={< CryptoList />}></Route>
                    <Route exact path='/calculator' element={< CryptoCalculator />}></Route>
                </Routes>
            </div>
        );
    }
}

export default App;