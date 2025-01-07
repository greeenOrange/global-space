import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Page/Home/Home';

import Rockets from './Page/Rockets/Rockets';
import Aboutus from './Page/AboutUs/Aboutus';
import Story from './Page/Story/Story';
import Blog from './Page/Blog/Blog';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
    <Routes>
        <Route index path="/rockets" element={<Rockets />} />
        <Route index path="/aboutus" element={<Aboutus />} />
        <Route index path="/story" element={<Story />} />
        <Route index path="/blog" element={<Blog />} />
        <Route index path="/" element={<Home />} />
    </Routes>
    <Footer />
  </BrowserRouter>
    </div>
  );
}

export default App;
