import React, {Component} from 'react';  
  // Footer Class
  class FooterComponent extends Component {
  
  
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // RENDER
    render() {
  
  
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // RETURN
      return (
          <React.Fragment>
            <div>
            <footer className=' App-footer bg-dark  text-center text-white '
            
                  >
  {/* Grid container */}
  <div className="container p-3 pb-0 vh-50">
    {/* Section: Social media */}
    <section className="mb-0">
      {/* Facebook */}
      <a
        data-mdb-ripple-init=""
        className="btn text-white btn-floating m-3"
        style={{ backgroundColor: "#3b5998" }}
        href="#!"
        role="button"
      >
        <i className="fab fa-facebook-f" />
      </a>
      {/* Twitter */}
      <a
        data-mdb-ripple-init=""
        className="btn text-white btn-floating m-3"
        style={{ backgroundColor: "#55acee" }}
        href="#!"
        role="button"
      >
        <i className="fab fa-twitter" />
      </a>
      {/* Google */}
      <a
        data-mdb-ripple-init=""
        className="btn text-white btn-floating m-3"
        style={{ backgroundColor: "#dd4b39" }}
        href="#!"
        role="button"
      >
        <i className="fab fa-google" />
      </a>
      {/* Instagram */}
      <a
        data-mdb-ripple-init=""
        className="btn text-white btn-floating m-3"
        style={{ backgroundColor: "#ac2bac" }}
        href="#!"
        role="button"
      >
        <i className="fab fa-instagram" />
      </a>
      {/* Linkedin */}
      <a
        data-mdb-ripple-init=""
        className="btn text-white btn-floating m-3"
        style={{ backgroundColor: "#0082ca" }}
        href="#!"
        role="button"
      >
        <i className="fab fa-linkedin-in" />
      </a>
      {/* Github */}
      <a
        data-mdb-ripple-init=""
        className="btn text-white btn-floating m-3"
        style={{ backgroundColor: "#333333" }}
        href="#!"
        role="button"
      >
        <i className="fab fa-github" />
      </a>
    </section>
    {/* Section: Social media */}
  </div>
  {/* Grid container */}
  {/* Copyright */}
  <div
    className="text-center p-3"
    style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
  >
    Özkan BULUT
  </div>
  {/* Copyright */}
</footer>
</div>
          </React.Fragment>
      );  /* end return*/
    } /* end render*/
  } /* end class*/
  
  // EXPORT
  export default FooterComponent;