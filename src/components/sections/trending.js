import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect, connectAdvanced } from 'react-redux';
import _ from 'lodash';

class Trending extends Component{

    componentDidMount(){
        this.Old_a = null;
        this.Current_a = null;
    }
    constructor(props) {
        super(props);
    }

    onHover(e) {

        //gets the hovered item and retrieves its Id
        var target_id = e.currentTarget.dataset.id

        //get the reference created for the ''a''
        this.Current_a = this.refs[target_id]

        if(this.Old_a!=null){
            this.Old_a.style = "display:none";
        }
        if(e){
          this.Current_a.style = "display:block";
        }
        //keep track of the currently clicked item and previosly clicked item
        this.Old_a = this.Current_a;
    }

    mouseOut(e) {

        //this.Current_a.style = "display:none";
        //this.Old_a.style = "display:none";
    }

    DisplayBooks(){

        return _.map(this.props.content, data => {
            return(
              <div className="w-20 trending-product" key={data.name}>
                  <Link className="product-container" data-id={data.name} to="./" onMouseEnter={this.onHover.bind(this)} onMouseOut={() => this.mouseOut()}>
                      <img className="trending-product-img"  src="./img/placeholder-image.png"/>
                      <div className="product-name">{data.name}</div>
                      <div className="product-description">{data.Shortdescription}</div>
                  </Link>

                <div className="row">
                  <div className="col">
                    <div className="product-price">${data.price}</div>
                  </div>
                  <div className="col">
                    <button  type="button" className="btn btn-link btn-sm" ref={data.name}
                    style={{display:'none'}}>
                    Add to cart
                    </button >
                  </div>
                </div>
              </div>
            );
        });
    }

    render() {
        return(
            <section>
            <div className="section-theme">
              <img src="./img/police-tape.png"></img>
            </div>
              <div className="container">
                <div className="heading trending-header">
                  <h2>Trending this month</h2>
                  <h4>Mistery & Crime</h4>
                </div>
                <div  className="row center">
                  { this.DisplayBooks() }
                </div>
              </div>
            </section>
        );
    }
}

//get data from the reducer
function mapStateToProps(state) {

    return{ content: state.trending };
}
//conect class with the reducer
export default connect(mapStateToProps)(Trending);
