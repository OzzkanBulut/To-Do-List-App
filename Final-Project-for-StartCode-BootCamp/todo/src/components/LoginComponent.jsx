import React, {Component} from 'react';  
import { Link } from 'react-router-dom';
  // Footer Class
  class LoginComponent extends Component {
  
  
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // RENDER
    render() {
  
  
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // RETURN
      return (
          <React.Fragment>
            <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Combined HTML and CSS</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n.gradient-custom {\n  /* fallback for old browsers */\n  background: #6a11cb;\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: -webkit-linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1));\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  background: linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1));\n}\n"
    }}
  />
  <section className="vh-50 gradient-custom">
    <div className="container py-5 h-50">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-5 col-md-8 col-lg-6 col-xl-5">
          <div
            className="card bg-dark text-white"
            style={{ borderRadius: "1rem" }}
          >
            <div className="card-body vh-10 p-5 text-center">
              <div className="mb-md-5 mt-md-4 pb-5">
                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                <p className="text-white-50 mb-5">
                  Please enter your username and password
                </p>
                <div
                  data-mdb-input-init=""
                  className="form-outline form-white mb-4"
                >
                  <input
                    type="email"
                    id="typeEmailX"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="typeEmailX">
                    Username
                  </label>
                </div>
                <div
                  data-mdb-input-init=""
                  className="form-outline form-white mb-4"
                >
                  <input
                    type="password"
                    id="typePasswordX"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="typePasswordX">
                    Password
                  </label>
                </div>
                
                <button
                  data-mdb-button-init=""
                  data-mdb-ripple-init=""
                  className="btn btn-outline-light btn-lg px-5"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

          </React.Fragment>
      );  /* end return*/
    } /* end render*/
  } /* end class*/
  
  // EXPORT
  export default LoginComponent;