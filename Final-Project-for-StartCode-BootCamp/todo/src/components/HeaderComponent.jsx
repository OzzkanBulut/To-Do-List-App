import React, {Component} from 'react';  
import { Link } from 'react-router-dom';
  // Footer Class
  class HeaderComponent extends Component {
  
  
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // RENDER
    render() {
  
  
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // RETURN
      return (
          <React.Fragment>
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
  <div className="container-fluid d-flex justify-content-between align-items-center">
  <Link to={`/todo/api/`} className="navbar-brand">
      
    
  <img
  alt="techcareer.net"
  data-test="header-logo"
  loading="lazy"
  width={185}
  height={20}
  decoding="async"
  data-nimg={1}
  className=""
  src="https://www.techcareer.net/assets/images/common/techcareer-logo.svg"
  style={{ color: "transparent" }}
/>
</Link>

{/* <img
  className=""
  src="https://startcode.dev/content/images/startcode.dev/logo.svg"
  width={185}
  height={20}
  style={{ color: "transparent" }}
  alt="startcode team"
/> */}


    <Link to={`/todo/api/`} className="navbar-brand mt-2">
      /StartCode 
    </Link>
    <div className="text-center flex-grow-1 d-flex justify-content-end">
      <h2 className="m-0 me-5 text-white">Full-Stack BootCamp</h2>
    </div>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link to={`/todo/api/`} className="nav-link mx-2 " aria-current="page">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to={`/todo/api/list`} className="nav-link mx-2 ">
            To-Do
          </Link>
        </li>
        <li className="nav-item">
          <Link to={`/login`} className="nav-link mx-2">
            Login
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>


          </React.Fragment>
      );  /* end return*/
    } /* end render*/
  } /* end class*/
  
  // EXPORT
  export default HeaderComponent;