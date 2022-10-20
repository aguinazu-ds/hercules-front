import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";

import './app.scss'
import Empresas from "./pages/Empresas/Empresas";

function App() {
  return (
    <div className="App">
      <Router>
        <div id="left" className="column">
          <Sidebar />
        </div>
        <div className="column" id="right">
          <Navbar />
          <Routes>
            <Route path='/'>
              <Route index element={<Home />} />
              <Route path='/empresas' element={<Empresas />} />
            </Route>
          </Routes>
        </div>   
      </Router>   
    </div>
  );
}

export default App;
