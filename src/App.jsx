import { Routes ,Route } from "react-router";
import NavBar from "./components/NavBar/NavBar";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import SignInForm from "./components/SignInForm/SignInForm";
import Landing from "./components/Landing/Landing";
import Dashboard from "./components/Dashboard/Dashboard";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";

const App = () => {
  const {user} = useContext(UserContext);
  return (
        <>
    <NavBar />
    <Routes>
    <Route path='/' element={user ? <Dashboard /> : <Landing /> } />
      <Route path="/sign-in" element={<SignInForm/>}/>
      <Route path="/sign-up" element={<SignUpForm/>}/>
      </Routes>
    </>
  );
};

export default App;