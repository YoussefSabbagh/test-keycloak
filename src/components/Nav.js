import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useKeycloak } from '@react-keycloak/web';
import { FaSignInAlt, FaSignOutAlt, FaUserPlus } from 'react-icons/fa';

const Nav = () => {
  const { keycloak, initialized } = useKeycloak();
  const user = keycloak?.idTokenParsed?.given_name || null;

  const handleLogout = async () => {
    localStorage.removeItem('token');
    await keycloak.logout();
    const test = keycloak.accountManagement();
    console.log('test ==>', test, '<==test');
  };

  const handleLogin = async () => {
    console.log('antes del login ');
    const logueado = await keycloak.login();
    console.log('lo que retorna el login ', logueado);
  };

  return (
    <header className="w-full px-10  bg-gray-300 text-blue-800 ">
      <div className="flex justify-between items-center ">
        <h1 className="text-3xl font-bold font-heading">Youssef BookStore</h1>
        <nav className="flex justify-between">
          <ul className="hidden md:flex px-4 font-semibold font-heading space-x-12">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/secured">Dashboar</NavLink>
            </li>
            {user ? (
              <li>
                <button
                  onClick={handleLogout}
                  className="flex justify-between items-center gap-2"
                >
                  <FaSignOutAlt />
                  Logout ({user})
                </button>
              </li>
            ) : (
              <>
                <li>
                  <button
                    onClick={handleLogin}
                    className="flex justify-between items-center gap-2"
                  >
                    <FaSignInAlt />
                    Login
                  </button>
                </li>
                <li>
                  <NavLink
                    to="/register"
                    className="flex justify-between items-center gap-2"
                  >
                    <FaUserPlus />
                    Registro
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
