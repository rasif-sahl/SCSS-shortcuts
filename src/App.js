import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BreakPoints from "./BreakPoints/Example/Index.jsx";


function App() {
  return (
    <div>
      <div>
      <Router>
        <Routes>
          <Route path="/" element={<BreakPoints />} />
        </Routes>
     </Router>
      </div>
    </div>
  );
}

export default App;