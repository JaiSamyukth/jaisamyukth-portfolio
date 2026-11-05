import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Work } from './pages/Work';
import { ProjectDetail } from './pages/ProjectDetail';
import { About } from './pages/About';
import { Approach } from './pages/Approach';
import { Learnings } from './pages/Learnings';
import { Experimental } from './pages/Experimental';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';
import { Name } from './pages/Name';

export function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:id" element={<ProjectDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/approach" element={<Approach />} />
        <Route path="/learnings" element={<Learnings />} />
        <Route path="/experimental" element={<Experimental />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/name" element={<Name />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
