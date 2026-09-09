import SearchBar from "../NavbarComponents/SearchBar";
import { Link, useNavigate } from "react-router";
import routes from "../../router/routes";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

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
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="User avatar"
                src={
                  "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                }
              />
            </div>
          </div>

          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {user ? (
              <>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>

                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
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
