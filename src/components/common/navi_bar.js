import React, { Component } from 'react';
import { Link } from 'react-router-dom';

    class NavBar extends Component{
        render() {
            return(
                <div>
                    <div styles={{marginLeft : '17px' , marginTop : '10px'}}>
                        <nav className="navbar navbar-static-top">
                            <div className="container-fluid">
                                <div className="navbar-header">
                                    <Link className="logo" to="/">FANATIC BOOKS</Link>
                                </div>
                                <form className="navbar-form navbar-right" role="search">
                                   <div className="input-group">
                                      <input type="text" className="form-control" placeholder="Search" />
                                      <span className="input-group-btn">
                                          <button type="button" className="btn btn-default"><span className="fa fa-search" aria-hidden="true"></span></button>
                                      </span>
                                   </div>
                                 </form>
                                <div className="navbar-items right">
                                  <ul className="nav navbar-nav ">
                                    <li className=""><a href="#" className=""><i className="fa fa-shopping-cart">3</i></a></li>
                                  </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                );
            }
        }
export default NavBar;
