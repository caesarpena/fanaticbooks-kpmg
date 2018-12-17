import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect, connectAdvanced } from 'react-redux';
import _ from 'lodash';
import { Button, Panel, ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';
import Login from '../login/topbar-login';

    class TopBar extends Component{
      componentDidMount(){
      }
      constructor(props, context) {
        super(props, context);

            this.state = {
              open: false
      };
  }

  Categories(){
      return _.map(this.props.content, data => {
          return(
             <li><a href="#">{data.categoryname}</a></li>
          );
      });
  }

  Categories(){
      return _.map(this.props.content, data => {
          return(
             <MenuItem eventKey="1">{data.categoryname}</MenuItem>
          );
      });
  }

  Subcategories(){
      return _.map(this.props.content2, data => {
          return(
             <MenuItem eventKey="1">{data.scategoryname}</MenuItem>
          );
      });
  }

        render() {
            return(
                <div>
                    <div styles={{marginLeft : '17px' , marginTop : '10px'}}>
                      <nav className="navbar navbar-default">
                        <div className="container-fluid">
                          {/* Brand and toggle get grouped for better mobile display*/ }
                            <div className="navbar-header">
                              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                              </button>
                            </div>
                            {/* Collect the nav links, forms, and other content for toggling*/ }
                            <div className="collapse navbar-collapse" style={{marginLeft : '35%'}} id="">
                              <ul className="nav navbar-nav">
                                <li className="topbar_link_c">
                                <ButtonToolbar>
                                  <DropdownButton
                                    bsSize="link"
                                    title="Category"
                                    id="dropdown-size-link"
                                  >
                                    { this.Categories() }
                                  </DropdownButton>
                                </ButtonToolbar>
                                </li>
                                <li className="topbar_link_c">
                                  <ButtonToolbar>
                                    <DropdownButton
                                      bsSize="link"
                                      title="Genre"
                                      id="dropdown-size-link"
                                    >
                                      { this.Subcategories() }
                                    </DropdownButton>
                                  </ButtonToolbar>
                                </li>
                                  <li className="topbar_link"><a href="#">Recommended</a></li>
                                  <li className="topbar_link"><a href="#">Award winners</a></li>
                                  <li className="topbar_link"><a href="#">New titles</a></li>
                              </ul>
                              <div className="row right topbar topbar-profile" >
                                  <li className=""><a href="#" className=""><div className="">Welcome, Jane Doe!</div></a></li>
                                  <li className=""><a onClick={() => this.setState({ open: !this.state.open })} className=""><i className="fa fa-user"></i></a></li>
                              </div>
                            </div>{/*<!-- /.navbar-collapse -->*/}
                          </div>{/*<!-- /.container-fluid -->*/}
                          <Panel id="" expanded={this.state.open}>
                            <Panel.Collapse>
                              <Panel.Body>
                                  <Login />
                              </Panel.Body>
                            </Panel.Collapse>
                          </Panel>
                      </nav>
                    </div>

                </div>
                );
            }
        }
//get data from the reducer
function mapStateToProps(state) {
  return{ content: state.categories, content2: state.subcategories };
}
//conect class with the reducer
export default connect(mapStateToProps)(TopBar);
