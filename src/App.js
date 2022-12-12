import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header/index";
import Home from "./pages/Home/index";
import SignIn from "./pages/SignIn/index";
import SignOut from "./pages/SignOut/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="header" />} />
        <Route path="signIn" element={<SignIn />} />
        <Route path="signOut" element={<SignOut />} />
        <Route path="header" element={<Navigate to="home" />} />
        <Route path="header" element={<Header />}>
          <Route index path="home" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
