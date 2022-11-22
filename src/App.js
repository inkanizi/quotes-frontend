import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import Category from "./pages/Category/Category";
import RandomQuote from "./pages/RandomQuote/RandomQuote";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Auth />} />
      <Route path="/registration" element={<Auth />} />

      <Route path="/category" element={<Category />} />
      <Route path="/random" element={<RandomQuote/>}/>
      
    </Routes>
  );
}

export default App;
