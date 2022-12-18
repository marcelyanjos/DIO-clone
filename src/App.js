import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header/index";
import Home from "./pages/Home/index";
import SignIn from "./pages/SignIn/index";
import SignUp from "./pages/SignUp/index";
import User from "./pages/UserHome/index";
import Userpage from "./pages/UserHome/userpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="/" element={<Header />}>
          <Route index path="home" element={<Home />} />
          <Route path="signIn" element={<SignIn />} />
          <Route path="signUp" element={<SignUp />} />
        </Route>
        <Route path="user" element={<Navigate to="userpage" />} />
        <Route path="user" element={<User />}>
          <Route index path="userpage" element={<Userpage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
