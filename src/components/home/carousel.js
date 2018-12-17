import React, { Component } from 'react';
import { Link } from 'react-router-dom';

    class Carousel extends Component{
        render() {
            return(
                <div>
                  <div id="" className="carousel-c slide" data-ride="carousel">
                    <div className="container-fluid ">
                      <div className="row">
                        <div className="col-sm">
                          <div className="container carousel-item">
                            <img className="" src="./img/placeholder-image.png"/>
                          </div>
                        </div>
                        <div className="col-sm">
                          <div className="container carousel-item">
                            <div className="carousel-text-container">
                              <h2 className="">Crime & Mystery</h2>
                              <p className="">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                              Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                              <div className="carousel-button-group">
                                <div className="row">
                                  <div className="center col-sm">
                                    <button type="button" className="btn btn-secondary btn-lg">Learn More</button>
                                  </div>
                                  <div className="center col-sm">
                                    <button type="button" className="btn btn-secondary btn-lg">Shop Now</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                );
            }
        }
export default Carousel;
