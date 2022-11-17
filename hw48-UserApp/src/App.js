import './App.css';
import { Routes, Route} from 'react-router-dom';

import Home from "./routes/Home";
import Error from "./routes/Error";
import UsersApp from './routes/UsersApp';
import UserDetails from './components/UserDetails';

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path="users" element={<UsersApp />}/>
      <Route path={"users/:userId"} element={<UserDetails />} />
      <Route path={"*"} element={<Error />} />
    </Routes>
  );
}

export default App;
