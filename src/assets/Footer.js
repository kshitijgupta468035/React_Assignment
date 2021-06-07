import React from 'react';

import { Link } from 'react-router-dom';
const Footer = () => {
	return (
		<div class="footer">
			<div className="footer-part-1">
				<p className="footer-p">Home</p>
				<p className="footer-p">Terms and Conditions</p>
				<p className="footer-p">Privacy Policy</p>
				<p className="footer-p">Collection Statement</p>
				<p className="footer-p">Help</p>
				<p className="footer-p">Manage Account</p>
			</div>
			<h3>Copyright @2021 DEMO Straming All Rights Reserved</h3>
			<div className="add-links">
				<Link to={{ pathname: 'https://www.facebook.com/' }} target="_blank">
					<i class="fa fa-facebook logo"></i>
				</Link>
				<Link to={{ pathname: 'https://twitter.com/?lang=en' }} target="_blank">
					<i class="fa fa-twitter logo"></i>
				</Link>
				<Link to={{ pathname: 'https://www.linkedin.com/home/?originalSubdomain=in' }} target="_blank">
					<i class="fa fa-linkedin"></i>
				</Link>
			</div>
			<div className="logos">
				<div className="logo-image-1"></div>
				<div className="logo-image-2"></div>
				<div className="logo-image-3"></div>
			</div>
		</div>
	);
};

export default Footer;
