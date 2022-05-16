import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavigationBar from './Components/NavigationBar';
import Main from './Components/Main';
import Footer from './Components/Footer'




function App() {
    return (
        <div className='App'>
            <NavigationBar />
            <Main />
            <Footer />
        </div>
    )
}

export default App;
