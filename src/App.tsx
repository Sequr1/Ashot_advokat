import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing } from '@/pages/Landing';
import { Main } from '@/pages/Main';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}
