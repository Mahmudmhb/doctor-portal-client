import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';
import Ragister from './Pages/Login/Ragister/Ragister';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/Login/PrivateRoute/PrivateRoute';
import Deshboard from './Pages/DeshBoard/Deshboard';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>

          <Switch>
            <PrivateRoute path="/appointment">
              <Appointment />
            </PrivateRoute>
            <Route path="/home">
              <Home />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/ragister">
              <Ragister />
            </Route>
            <PrivateRoute path="/deshboard">
              <Deshboard />
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
{/* npm install react-router-dom@5  react 5 er version install  https://v5.reactrouter.com/  */ }
