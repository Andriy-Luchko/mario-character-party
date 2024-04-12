import './App.css'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import ViewCharacters from './pages/ViewCharacters.jsx';
import AddCharacters from './pages/AddCharacters.jsx';
import CharacterEditPage from './pages/CharacterEditPage.jsx';
import CharacterDeletePage from './pages/CharacterDeletePage.jsx';
import CharacterDetailPage from './pages/CharacterDetailPage.jsx';

import { Routes, Route } from "react-router-dom";
function App() {

    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route path="addcharacters" element={<AddCharacters />} />
                    <Route path="viewcharacters" element={<ViewCharacters />} />
                    <Route path="viewcharacters/:id/" element={<CharacterDetailPage />} />
                    <Route path="viewcharacters/:id/edit" element={<CharacterEditPage />} />
                    <Route path="viewcharacters/:id/delete" element={<CharacterDeletePage />} />
                    <Route path="viewcharacters/:id/details" element={<CharacterDetailPage />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
