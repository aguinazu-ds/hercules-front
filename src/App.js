import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";

import './app.scss'

function App() {
  return (
    <div className="App">
      <div id="left" className="column">
        <Sidebar />
      </div>
      <div className="column" id="right">
        <Navbar />
        <Router>
          <Routes>
            <Route path='/'>
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </Router>
      </div>      
    </div>
  );
}

export default App;
