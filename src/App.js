import React from 'react';
import './App.css';
import Movies from './components/movies/movies';
import Counter from "./components/counter/counter";

function App() {
    return (
        <main className="container">
            <h1>Hello World</h1>
            <Counter/>
            <Movies/>
        </main>
    );
}

export default App;
