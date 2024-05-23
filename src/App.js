import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResourcesTab from './components/ResourcesTab.js';
import RequestsTab from './components/ResourceCard.js';
import AddResourceItem from './components/AddResourceItem';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
          <Route path="/" element={<ResourcesTab />} />
          <Route path="/requests" element={<RequestsTab />} />
          {/* <Route path="/users" element={<UsersTab />} /> */}
          <Route path="/add" element={<AddResourceItem />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
