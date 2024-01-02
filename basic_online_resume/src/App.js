import React from 'react';
import "./App.css";
import img from'./img/a.jpg';
const App = () => {
  
  return (
    <>
      {/* <!-- Page Container --> */}
      <div class="w3-content w3-margin-top">

        {/* <!-- The Grid --> */}
        <div class="w3-row-padding">

          {/* <!-- Left Column --> */}
          <div class="w3-third">

            <div class="w3-white w3-text-grey w3-card-4 a1">
              <div class="w3-display-container">
                <img src={img} className='a2' alt="Avatar"/>
                  <div class="w3-display-bottomleft w3-container w3-text-black">
                    <h2 className='font'>Anshumaan Khare</h2>
                  </div>
              </div>
              <div class="w3-container">
                <p><i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>MERN Stack Developer</p>
                <p><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>xyz, India</p>
                <p><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>ex@mail.com</p>
                <p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>1224435534</p>
                <hr/>

                  <p class="w3-large"><b><i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>
                  <p>ReactJs</p>
                  <div class="w3-light-grey w3-round-xlarge w3-small">
                    <div class="w3-container w3-center w3-round-xlarge w3-teal a3" >90%</div>
                  </div>
                  <p>NodeJs</p>
                  <div class="w3-light-grey w3-round-xlarge w3-small">
                    <div class="w3-container w3-center w3-round-xlarge w3-teal a4" >
                      <div class="w3-center w3-text-white">80%</div>
                    </div>
                  </div>
                  <p>MongoBD</p>
                  <div class="w3-light-grey w3-round-xlarge w3-small">
                    <div class="w3-container w3-center w3-round-xlarge w3-teal a5" >75%</div>
                  </div>
                  <p>Java</p>
                  <div class="w3-light-grey w3-round-xlarge w3-small">
                    <div class="w3-container w3-center w3-round-xlarge w3-teal a6" >70%</div>
                  </div>
                  <br/>

                    <p class="w3-large w3-text-theme"><b><i class="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Languages</b></p>
                    <p>English</p>
                    <div class="w3-light-grey w3-round-xlarge">
                      <div class="w3-round-xlarge w3-teal a7"></div>
                    </div>
                    <p>Hindi</p>
                    <div class="w3-light-grey w3-round-xlarge">
                      <div class="w3-round-xlarge w3-teal a8"></div>
                    </div>
                    
                    <br/>
                    </div>
                  </div><br/>

                    {/* <!-- End Left Column --> */}
                  </div>

                  {/* <!-- Right Column --> */}
                  <div class="w3-twothird">

                    <div class="w3-container w3-card w3-white w3-margin-bottom">
                      <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Experience</h2>
                     
                      <div class="w3-container">
                        <h5 class="w3-opacity"><b>MERN Stack Developer</b></h5>
                        <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Mar 2012 - Dec 2014</h6>
                        <p>I am Good in MERN Stack Projects</p>
                        <hr/>
                      </div>
                      <div class="w3-container">
                        <h5 class="w3-opacity"><b>Flutter Developer Intern</b></h5>
                        <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Jun 2021 - Mar 2021</h6>
                        <p> Good in Flutter Projects </p><br/>
                      </div>
                    </div>

                    <div class="w3-container w3-card w3-white">
                      <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>
                      
                      <div class="w3-container">
                        <h5 class="w3-opacity"><b>BIT</b></h5>
                        <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2021 - 2024</h6>
                        <p>Bachelor Degree</p><br/>
                      </div>
                    </div>

                    {/* <!-- End Right Column --> */}
                  </div>

                  {/* <!-- End Grid --> */}
              </div>

              {/* <!-- End Page Container --> */}
            </div>

            <footer class="w3-container w3-teal w3-center w3-margin-top">
              <p>Find me on social media.</p>
              <i class="fa fa-facebook-official w3-hover-opacity"></i>
              <i class="fa fa-instagram w3-hover-opacity"></i>
              <i class="fa fa-snapchat w3-hover-opacity"></i>
              <i class="fa fa-pinterest-p w3-hover-opacity"></i>
              <i class="fa fa-twitter w3-hover-opacity"></i>
              <i class="fa fa-linkedin w3-hover-opacity"></i>
              <p></p>
            </footer>
          </>
          )
}

          export default App