
import React from 'react';
import Startingpage from './components/Startingpage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TodoPage from './components/TodoPage';


function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Startingpage />} />
                    <Route path="/todo" element={<TodoPage />} />
                </Routes>
            </BrowserRouter>

        </>
    );
}

export default App