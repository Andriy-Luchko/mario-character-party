import './App.css'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import ViewCharacters from './pages/ViewCharacters.jsx';
import AddCharacters from './pages/AddCharacters.jsx';
import { Routes, Route } from "react-router-dom";
function App() {

  return (
    <div className='App'>
        <Header/>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="addcharacters" element={<AddCharacters />} />
          <Route path="viewcharacters" element={<ViewCharacters/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
