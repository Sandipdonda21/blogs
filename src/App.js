import { Route, Routes , BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs';
import Navbar from './components/Navbar'
import PostBlog from './components/PostBlog';
import RegistrationPage from './components/RegistrationPage';
import TableData from './components/TableData';

function App() {
 const  data = [
    {Id : 20 ,
    fname: 'Sandip',
    lname :'donda',
    email :'sandip04@gmail.com',
    phone : 8757648723}
    ,
    {Id : 21 ,
      fname: 'Hardik',
      lname :'donda',
      email :'sandip04@gmail.com',
      phone : 8757648723},
      {Id : 22 ,
        fname: 'Kishan',
        lname :'donda',
        email :'sandip04@gmail.com',
        phone : 8757648723},
        {Id : 23 ,
          fname: 'Shubham',
          lname :'donda',
          email :'sandip04@gmail.com',
          phone : 8757648723},
          {Id : 24 ,
            fname: 'Mohit',
            lname :'donda',
            email :'sandip04@gmail.com',
            phone : 8757648723},
]

  return (
    <> 
    <TableData value={data}/>
    {/* <RegistrationPage/> */}
    {/* <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Blogs/>}></Route>
        <Route exact path='/postblog' element={<PostBlog/>}></Route>
      </Routes>
    </Router> */}
    </>
  );
}

export default App;