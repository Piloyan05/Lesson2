import Contact from "./Components/Pages/Contact";
import Skills from "./Components/Pages/Skills";
import Pricing from "./Components/Pages/Pricing"
import About from "./Components/Pages/About";
import Home from "./Components/Pages/Home";
import LetsTalk from "./Components/LetsTalk";
import Error from "./Components/Error";
import { Routes,Route } from "react-router-dom";
import Layout from "./Components"
import "./App.css"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/contacts" element={<Contact/>}/>
        <Route path="/letsTalk" element={<letsTalk/>}/>
        
        <Route path="*" element={<Error/>}/>

        </Route>

      </Routes>


    </>
  );
}

export default App;
