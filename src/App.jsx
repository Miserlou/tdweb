import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header      from './components/Header';
import Footer     from './components/Footer';
import RecordList  from './pages/RecordList';
import RecordDetail from './pages/RecordDetail';
import Submissions from './pages/Submissions';
import About       from './pages/About';
import Contact     from './pages/Contact';


export default function App() {
  return (
    <>
      <Header />
      <Routes basename="/tdweb/">
        <Route path="/"               element={<RecordList />} />
        <Route path="/about"          element={<About />} />
        <Route path="/contact"        element={<Contact />} />
        <Route path="/submissions"        element={<Submissions />} />
        <Route path="/record/:catalogNumber" element={<RecordDetail />} />
      </Routes>
    </>
  );
}
