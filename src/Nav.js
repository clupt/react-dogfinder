import { NavLink } from "react-router-dom";
import "./Nav.css";
/** Nav
 *
 * props - names ["whiskey", "perry", ...]
 *
 * makes a NavLink for each dog and for all dogs
 *
 * App --> Nav
 */

function Nav ({names}) {
  return (
    <div className="Nav">
      {names.map((n, idx) => (
        <div key={idx} className="Nav-navlink">
          <NavLink to={`dogs/${n}`}>{n}</NavLink>
        </div>
      ))}
    <div className="Nav-navlink">
      <NavLink to={"/"}>All dogs</NavLink>
    </div>
    </div>
  )
}

export default Nav;