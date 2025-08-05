import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './App';         // your Layout component
import Home from './pages/Home';
import Rules from './pages/Rules';
import Callouts from './pages/Callouts';
import Skills from './pages/Skills';
import Analysis from './pages/Analysis';
import Workout from './pages/Workout';
import Purchases from './pages/Purchases';

// skill sub-pages
import Serve from './pages/skillpages/Serve';
import Spike from './pages/skillpages/Spike';
import Set from './pages/skillpages/Set';
import Receive from './pages/skillpages/Receive';
import Block from './pages/skillpages/Block';
import Dig from './pages/skillpages/Dig';

import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="rules" element={<Rules />} />
          <Route path="callouts" element={<Callouts />} />
          <Route path="skills" element={<Skills />} />
          <Route path="skills/serve" element={<Serve />} />
          <Route path="skills/spike" element={<Spike />} />
          <Route path="skills/set" element={<Set />} />
          <Route path="skills/receive" element={<Receive />} />
          <Route path="skills/block" element={<Block />} />
          <Route path="skills/dig" element={<Dig />} />
          <Route path="analysis" element={<Analysis />} />
          <Route path="workouts" element={<Workout />} />
          <Route path="purchases" element={<Purchases />} />
          {/* fallback */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
