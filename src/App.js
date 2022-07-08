import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Navbar from "./Components/Navbar";
import Main from "./Pages/Main";
import Error from "./Pages/Error";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Main/>}/>
                    <Route path='*' element={<Error/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
