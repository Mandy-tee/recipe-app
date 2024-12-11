import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import HomePage from "./pages/HomePage.Jsx";
import FavoritesPage from "./pages/FavoritesPage.jsx";

function App() {
  
  return (
    <div className="flex">
      <Sidebar/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/favorites' element={<FavoritesPage />} />
      </Routes>
    </div>
  )
}

export default App
