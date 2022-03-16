import React from 'react';
import Header from "./Header";
import DisplayRecords from "./DisplayRecords";
import Task from "./Task";
import Thoughts from "./Thoughts";  
import Footer from './Footer';


function App() {
    return (
        <div>
            <Header />
            <DisplayRecords />
            <Task />
            <Thoughts />
            <Footer />
        </div>
    );  
} 

export default App;
 