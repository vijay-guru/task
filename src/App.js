import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Details from './Details';
import Home from './Home';
function App() {
  
  return (
    <Router>
    <div>
      <Routes>
      <Route exact path="/users" element={<Home/>}></Route>
      <Route exact path="/users/:id" element={<Details/>}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
