
import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


import TopBar from './common/top_bar';
import NavBar from './common/navi_bar';
import Carousel from './home/carousel';
import Trending from './sections/trending';
import Footer from './common/footer';

export default class Home extends Component {
	constructor(props) {
        super(props);
	};

	componentDidMount() {
	}

	render () {
		return (
			<div>
					<TopBar />
					<NavBar />
					<Carousel />
					<div className="section-spacer"/>
					<Trending />
					<div className="section-keyline"/>
					<Footer />
			</div>
		);
	}
}
