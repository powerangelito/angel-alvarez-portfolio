import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from '@/pages/Home';
import { ProjectDetail } from '@/pages/ProjectDetail';

import { ScrollToTop } from './ScrollToTop';

export function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
