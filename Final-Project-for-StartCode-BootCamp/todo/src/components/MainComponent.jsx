import React, {Component} from 'react'; 
  // Footer Class
  class MainComponent extends Component {
  
  
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // RENDER
    render() {
  
  
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // RETURN
      return (
          <React.Fragment>
            <div className="vh-100  mainSection ">
            
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <br></br><br></br><br></br>
  <div className="cardd " >
    <img className='profileImg'
    src="https://cdn.vectorstock.com/i/1000v/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg" alt="John"  />
    <h1>Özkan Bulut</h1>
    <p className="titlee">Backend Developer</p>
    
    <a className="links" href="https://github.com/OzzkanBulut/">
      <i className="fa-brands fa-github  fa-2x me-3 ms-2" />
    </a>
    <a className="links" href="https://www.instagram.com/ozkannbulut/">
      <i className="fa-brands fa-instagram fa-2x me-3" />
      </a>
    <a className="links" href="https://www.linkedin.com/in/ozkan-bulut/">
      <i className="fa fa-linkedin fa-2x me-3 " />
    </a>
   
    
  </div>
  


            </div>
          </React.Fragment>
      );  /* end return*/
    } /* end render*/
  } /* end class*/
  
  // EXPORT
  export default MainComponent;