import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import Search from "./pages/Search";
import WatchPage from "./pages/WatchPage"



function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/results/search_query/:query" element={<Search />} />
        <Route path="/watch" element={<WatchPage />} />
        <Route path="*" element={<p>404</p>} />
      </Routes>
    </>
  );
}

export default App;
