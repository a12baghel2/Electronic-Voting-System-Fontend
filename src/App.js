import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Admin from './Component/Admin';
import Nav from './Component/Nav'
import SignUp from './Component/SignUp';
import Login from './Component/Login';

function App() {
  return (
    <div className="justify-content">
      <Nav/>
      {10 < 2 ? <Admin/> : <SignUp/>}
      <Login/>
    </div>
  );
}

export default App;
