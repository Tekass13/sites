import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar.jsx';
import HomePage from './pages/HomePage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import AdminAnimalPage from './pages/AdminAnimalPage.jsx';
import AdminContactPage from './pages/AdminContactPage.jsx';

const App = () => (
    <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/admin/animaux" element={<AdminAnimalPage />} />
            <Route path="/admin/contacts" element={<AdminContactPage />} />
            <Route
              path="*"
              element={
                <main>
                  <p>Page inconnue</p>
                </main>
              }
            />
        </Routes>
    </BrowserRouter>
);

export default App;
