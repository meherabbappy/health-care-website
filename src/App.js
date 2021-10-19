import { BrowserRouter,Route,Switch } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login/Login';

import NotFound from './Components/NotFound/NotFound';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
import Services from './Components/Services/Services';

function App() {
  return (
    < div className = "App">

    <BrowserRouter>
    <Header></Header>
    <Switch>
      
      <Route exact path ="/">
      <Home></Home>
      </Route>

      <Route path ="/home">
      <Home></Home>
      </Route>

      <Route path ="/servicedetails/:doctorId">
            <ServiceDetails></ServiceDetails>
          </Route>

      <Route path ="/services">
      <Services></Services>
      </Route>

      <Route path ="/about">
      <About></About>
      </Route>

      <Route path ="/contact">
      <Contact></Contact>
      </Route>

      <Route path ="/login">
      <Login></Login>
      </Route>

      <Route path ="*">
      <NotFound></NotFound>
      </Route>



    </Switch>
    <Footer></Footer>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
