import { NavLink } from "react-router-dom";

const Nav = (props) => {
  const checkIsactive = ({ isActive }) => {
    return {
      display: "block",
      margin: "1rem 0",
      color: isActive ? "oragne" : "",
    };
  };

  return (
    <nav>
      <ul>
        <li>
          <NavLink style={checkIsactive} to="/">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink style={checkIsactive} to="/logs">
            LOGS
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;