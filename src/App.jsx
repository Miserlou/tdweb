import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header      from './components/Header';
import RecordList  from './pages/RecordList';
import RecordDetail from './pages/RecordDetail';
import About       from './pages/About';
import Contact     from './pages/Contact';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/"               element={<RecordList />} />
        <Route path="/about"          element={<About />} />
        <Route path="/contact"        element={<Contact />} />
        <Route path="/record/:catalogNumber" element={<RecordDetail />} />
      </Routes>
    </>
  );
}
