import { NavLink } from "react-router-dom";
import logo from "../../../assets/rplogo.png";
import { SignedIn, SignedOut, SignInButton, useAuth, UserButton } from '@clerk/clerk-react';


export default function Nav() {
    const { isSignedIn } = useAuth();
  return (
    <header>
      <nav aria-label="Primary">

      <div className="nav-left">
        <img src={logo} alt="Pixell River logo" />
      </div>

      <div className="nav-links">
          {isSignedIn && (
            <>
              <NavLink
                to="/employees"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Employees
              </NavLink>

              <NavLink
                to="/organization"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Organization
              </NavLink>
            </>
          )}
        </div>
        
        <div className="nav__auth">
          <SignedOut>
            <SignInButton />
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>

    </nav>

    </header>
    
  );
}
