import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Page/Home/Home';
import Header from './Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
    <Routes>
        <Route index element={<Home />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
