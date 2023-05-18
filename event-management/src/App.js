
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrimaryNav from './components/PrimaryNav';
import Events from './pages/Home';
import "bootstrap/dist/css/bootstrap.min.css";

import Form from './pages/Form';




function App() {

  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<PrimaryNav />}>
     
      </Route>
      <Route path="events" element={<Events />}></Route>
      <Route path="form" element={<Form />}></Route>
      
      
      
      
    </Routes>
  </BrowserRouter>
  );
}


export default App;
