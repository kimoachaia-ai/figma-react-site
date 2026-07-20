import { HashRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <HashRouter> {}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}
