import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Paginas/Home';

export default function AppRouters() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
};