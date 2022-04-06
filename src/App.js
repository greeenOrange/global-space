import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Page/Home/Home';
import Header from './Page/Header/Header';
import Rockets from './Page/Rockets/Rockets';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
    <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/rockets" element={<Rockets />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
