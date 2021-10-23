
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Register from './Components/Register/Register';
import Doctors from './Components/Doctors/Doctors'
import NotFound from './Components/NotFound/NotFound';
import DoctorDetails from './Components/DoctorDetails/DoctorDetails';
import About from './Components/About/About';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Header></Header>
        
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path='/doctors'>
             <Doctors></Doctors>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
             <Register></Register>
          </Route>
          <Route path='/about'>
              <About></About>
          </Route>
          <PrivateRoute path='/doctordetails/:doctorId'>
             <DoctorDetails></DoctorDetails>
          </PrivateRoute>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
 
    </div>
  );
}

export default App;
