import NavBar from './Navbar';
import Home from './home';
import Create from './Create'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import Login from './Login';
import SignUp from './SignUp';
import { useContext } from 'react';
import { AuthContext } from './Context/authContext';
import { Container } from 'react-bootstrap';
function App() {


  // const title = "new blog" ;
  // const nos = 10 ;
  // jsx converts everything inside {} to string except booleans and objects

  const { state } = useContext(AuthContext) ;

  return (
    <Router>
     
      <div fluid className="App bg-dark text-white vh-100 d-flex flex-column">
        <NavBar  />
        <div className="content">
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            {<Route path='/create' element={<Create/>}></Route>}
            {<Route path='/blog/:id' element={<BlogDetails/>}></Route>}
            <Route path='/signup' element={!state.user ? <SignUp  /> : <Navigate to="/"/>}></Route>
            <Route path='/login' element={!state.user ? <Login  /> : <Navigate to="/"/>}></Route>
          </Routes>
        </div>
      </div>
      
    </Router>
  );
}

export default App;
