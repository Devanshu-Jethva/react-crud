import './App.css';
import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router';
import { HomeComponent } from './components/HomeComponent';
import { GetAllUsers } from './components/GetAllUsers';
import { AddUser } from './components/AddUser';
import { GetUser } from './components/GetUser';
import { UpdateUser } from './components/UpdateUser';

const App = () => {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<HomeComponent />}></Route>
        <Route path='/getallusers' element={<GetAllUsers />}></Route>
        <Route path='/adduser' element={<AddUser />}></Route>
        <Route path='/getuser/:id' element={<GetUser />}></Route>
        <Route path='/updateuser/:id' element={<UpdateUser />}></Route>

      </Routes>
    </div>
  );
}

export default App;
