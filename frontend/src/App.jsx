import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Main from './component/main';
import Home from './component/main/home';
import Signup from './component/main/signup';
import Login from './component/main/login';
import UserDashboard from './component/user/userDashboard';
import User from './component/user';
import Admin from './component/admin';
import AdminDashboard from './component/admin/adminDashboard';
function App() {
  return (
  <>
    <BrowserRouter>
    <Routes>
      <Route element={<Main/>} path="main">
        <Route element={<Home/>} path="home"></Route>
        <Route element={<Login/>} path="login"></Route>
        <Route element={<Signup/>} path="signup"></Route>
      </Route>
      <Route element={<User/>} path="user">
        <Route element={<UserDashboard/>} path="userDashboard"></Route>
      </Route>
      <Route element={<Admin/>} path="admin">
        <Route element={<AdminDashboard/>} path="adminDashboard"></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  </>
 
    
  );
}

export default App;
