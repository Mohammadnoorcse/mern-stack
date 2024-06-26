import "./App.css";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {Toaster} from "react-hot-toast";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Success from "./Pages/Success";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/success" element={<Success/>}/>
      </Routes>
      <Toaster/>
    </Router>
  )
}

export default App