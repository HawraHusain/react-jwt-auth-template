// src/components/NavBar/NavBar.jsx
import { Link } from "react-router";
import { useContext } from "react";

import { UserContext } from "../../contexts/UserContext";
const NavBar = () => {

  const {user} = useContext(UserContext);
  const handleSignOut = () => {
    // Clear the token from localStorage
    localStorage.removeItem('token');
    // Clear the user state
    setUser(null);
  };

    return (
      <nav>
        {user ? (
        <ul>
          <li>Welcome, {user.username}</li>
          <li>
                    <Link to="/" onClick={handleSignOut}>SignOut</Link>
                </li>
                
        </ul>
        
      ) : (
        <ul>
            <li>
                <Link to="/sign-up">Sign Up</Link>
                </li>
               
        </ul>
      )}
      </nav>
    );
  };
  
  export default NavBar;
  
  