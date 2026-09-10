import SearchBar from "../NavbarComponents/SearchBar";
import { Link, useNavigate } from "react-router";
import routes from "../../router/routes";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { VscAccount ,  VscVerified  } from "react-icons/vsc";

function Navbar() {
  const navigate = useNavigate();

  const { user, signOut } = useContext(UserContext);

  const handleLogout = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <nav className="navbar bg-nav-gray h-16">
      <div className="flex-1">
        <Link to={routes.home} className="btn btn-ghost text-xl font-electro">
          Reactor
        </Link>
      </div>

      <div className="flex gap-2">
        <SearchBar />

        <div className="dropdown dropdown-end">
          {/* Trigger */}
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            {user ? (
                // Qui andrà l'immagine eventualmente caricata dall'utente
              <VscVerified className="text-3xl"/>
            ) : (
              <VscAccount  className="text-3xl" />
            )}
          </div>

          {/* Dropdown */}
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {user ? (
              <>
                <li>
                  <Link to="/profile">Profilo</Link>
                </li>

                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to={routes.register}>Register</Link>
                </li>

                <li>
                  <Link to={routes.login}>Login</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
