import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Subreddit from './pages/subreddit/Subreddit';
import Home from './pages/home/Home';

function App() {

    return (
        <>

            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/subreddit/:id" element={<Subreddit/>} />
            </Routes>
<footer>In opdracht van NOVI hogeschool © </footer>

        </>
  );
}

export default App;
