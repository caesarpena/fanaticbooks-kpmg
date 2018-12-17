import React, { Component } from 'react';

class Footer extends Component{
    render() {
        return(
            <footer>
              <div  className="main-footer">
                <div className="container footer">
                  <div className="footer-quicklinks center">
                    <div className="row">
                      <div className="col-sm">
                        <a>About Us</a>
                      </div>
                      <div className="col-sm">
                        <a>Corporate Information</a>
                      </div>
                      <div className="col-sm">
                        <a>Careers</a>
                      </div>
                      <div className="col-sm">
                        <a>Customer Service</a>
                      </div>
                      <div className="col-sm">
                        <a>Sitemap</a>
                      </div>
                    </div>
                  </div>
                    <div className="footer-social center">
                      <div className="row">
                        <div className="col-sm">
                          <a href="#" className="icon social in"><i className="fa fa-instagram"/></a>
                        </div>
                        <div className="col-sm">
                          <a href="#" className="icon social tw"><i className="fa fa-google-plus"/></a>
                        </div>
                        <div className="col-sm">
                          <a href="#" className="icon social tw"><i className="fa fa-twitter"/></a>
                        </div>
                        <div className="col-sm">
                          <a href="#" className="icon social fb"><i className="fa fa-facebook"/></a>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
              <div  className="copyright">
                <div className="">Copyright © 2018 Fanatic Books All rights reserved.</div>
              </div>
            </footer>
              );
            }
        }
export default Footer;
