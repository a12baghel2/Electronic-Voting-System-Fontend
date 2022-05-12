import "bootstrap/dist/css/bootstrap.min.css";
import Admin from './Component/Admin';
import Nav from './Component/Nav'
import SignUp from './Component/SignUp';
import Login from './Component/Login';
import PartyDetail from './Component/PartyDetail';
import Candidate from './Component/Candidate';
import Election from './Component/Election';
import Home from './Component/Home';
import Result from './Component/Result'
import PendingVoterId from "./Component/PendingVoterId";
import User from './Component/User'
import { BrowserRouter, Route,  Routes} from "react-router-dom";

const obj = {
  username : "a12baghel2@gmail.com",
  password : "abhi123",
  role : "admin"
}

const obj2 = {
  username : "abhimanyu.57@wipro.com",
  password : "abhi123",
  role : "user"
}

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/user' element={<User />}></Route>
          <Route exact path='/result' element={<Result />}></Route>
          <Route exact path='/admin' element={<Admin />}></Route>
          <Route exact path='/signup' element={<SignUp />}></Route>
          <Route exact path='/login' element={<Login obj={obj2} />}></Route>
          <Route exact path='/addparty' element={<PartyDetail />}></Route>
          <Route exact path='/addcandidate' element={<Candidate />}></Route>
          <Route exact path='/addelection' element={<Election />}></Route>
          <Route exact path='/pending' element={<PendingVoterId />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
