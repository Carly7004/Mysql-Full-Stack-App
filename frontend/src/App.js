import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./Pages/Add";
import Products from "./Pages/Products";
import Update from "./Pages/Update";
import './styles.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
