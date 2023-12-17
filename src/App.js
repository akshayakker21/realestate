import './App.css';
// import { BrowserRouter as Router, Route ,Switch} from 'react-router-dom';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './pages/Navbar';
import NoPage from './pages/NoPage';


import Buy from './pages/Buy';

import Page1 from './pages/Rent/Page1';
import Page2 from './pages/Rent/Page2';
import Page3 from './pages/Rent/Page3';
import Page4 from './pages/Rent/Page4';
import Page5 from './pages/Rent/Page5';
import Page6 from './pages/Rent/Page6';
// import SearchBar from './pages/SearchBar';


function App() {
  return (
    <div>

 
      {/* <Router>
        <Navbar/>
      <Switch>
      <Route path='/'  exact  component={Home}></Route>
      <Route path='/lands'  exact  component={Lands}></Route>
      <Route path='/about'  exact  component={About}></Route>
      <Route path='/buy'  exact  component={Buy}></Route>
      <Route path='/*'  exact  component={NoPage}></Route>
      <Route path='/properties/card1'  exact  component={Page1}></Route>
      </Switch>
      </Router> */}

<>
            <BrowserRouter>
            <Navbar/>
                <Routes>
                    <Route exact path="/" element={<Home />}/>
                    <Route exact path="/about" element={<About />} />
                   
                    <Route exact path="/buy" element={<Buy />} />
                    <Route exact path="/nopage" element={<NoPage />} />
                    <Route exact path="/properties/card1" element={<Page1 />} />
                    <Route exact path="/properties/card2" element={<Page2 />} />
                    <Route exact path="/properties/card3" element={<Page3 />} />
                    <Route exact path="/properties/card4" element={<Page4 />} />
                    <Route exact path="/properties/card5" element={<Page5 />} />
                    <Route exact path="/properties/card6" element={<Page6 />} />
                </Routes>
            </BrowserRouter>
        </>
   





    </div>
    
  );
}

export default App;
