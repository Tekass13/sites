import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
            CONTACT
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/contacts">
            ADMIN CONTACTS
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/animaux">
            ADMIN ANIMAUX
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
