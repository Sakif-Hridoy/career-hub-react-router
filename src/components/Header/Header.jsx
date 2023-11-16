import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  const links = 
    <>
      
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/jobs">Jobs</NavLink></li>
      <li><NavLink to="/applied">Applied Jobs</NavLink></li>
      <li><NavLink to="/statistics">Statictics</NavLink></li>
      <li><NavLink to="/blogs">Blogs</NavLink></li>
      

      
    </>
  
  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {links}
        {/* <li><a>Item 1</a></li>
        <li><a>Item 3</a></li> */}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Career Hub</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {links}
      {/* <li><a>Item 1</a></li>
      <li><a>Item 3</a></li> */}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Apply Now</a>
  </div>
</div>
  );
};

Header.propTypes = {};

export default Header;

// 
{/* <li><NavLink>Home</NavLink>
<NavLink>Jobs</NavLink>
</li> */}
