import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import Container from './Container'
import SocialIcons from './SocialIcons'

const FooterWrapper = styled.footer`
	background-image: linear-gradient(to right, #050609, #0c0f14);
	color: #959595;
`
const FooterMid = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding: 1rem 0;

	& .FooterMidSections > h4 {
		font-size: 1.5rem;
		color: var(--primary);
		margin-bottom: .5rem;
	}
	& .FooterMidSections i {
		color: #ccc;
	}

	& .FooterMidSections {
		width: 100%;
		padding: 2rem 0 0 0;
	}
	& .FooterMidSections > img {
		// filter: grayscale(1);
		width: 110px;
		height: 83px;
		// opacity: 0.5;
	}

	/*|||||||||||||||||||||| Mobile(sm) ||||||||||||||||||||||*/
	@media only screen and (min-width: 576px) {

	}

	/*|||||||||||||||||||||| Tablet(md) ||||||||||||||||||||||*/
	@media only screen and (min-width: 768px) {
		& .FooterMidSections {
			width: 50%;
			padding: 2rem;
		}
	}

	/*|||||||||||||||||||||| Laptop(lg) ||||||||||||||||||||||*/
	@media only screen and (min-width: 992px) {
		& .FooterMidSections {
			width: 33.3333%;
			padding: 2rem;
		}
	}

	/*|||||||||||||||||||||| Desktop(xl) ||||||||||||||||||||||*/
	@media only screen and (min-width: 1200px) {

	}
`
const FooterTop = styled.div`
	background-color: #0e1116;
	padding: 2rem 0;
	
	& .footerTopInner {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		text-align: center;
		color: #ddd;
		font-size: 0.875rem;
	}

	& .footerAside {
		width: 100%;
		padding: 1rem 0; 
	}
	& .footerAside > h5 {
		font-weight: 700;
		font-size: 1.125rem;
	}

	/*|||||||||||||||||||||| Mobile(sm) ||||||||||||||||||||||*/
	@media only screen and (min-width: 576px) {

	}

	/*|||||||||||||||||||||| Tablet(md) ||||||||||||||||||||||*/
	@media only screen and (min-width: 768px) {
		padding: 0;

		& .footerTopInner { 
			font-size: 1rem;
			flex-wrap: nowrap;
		}
		& .footerAside {
			padding: 1rem; 
		}
	}

	/*|||||||||||||||||||||| Laptop(lg) ||||||||||||||||||||||*/
	@media only screen and (min-width: 992px) {

	}

	/*|||||||||||||||||||||| Desktop(xl) ||||||||||||||||||||||*/
	@media only screen and (min-width: 1200px) {

	}
`
const FooterBottom = styled.div`
	padding: .75rem 0;
	text-align: center;
	font-size: .75rem;
	color: #ddd;
	background-color: #0e1116;
`

const Footer = () => {
	return (
		<FooterWrapper>
			<FooterTop>
				<Container className="footerTopInner">
					<div className="footerAside">
						<h5>Email & Call</h5>
						<p>
							Email: <a href="mailto:urbansportshub@gmail.com">urbansportshub@gmail.com</a><br/>
							Phone: <a href="tel:+919182716220">+91 9182716220</a>
						</p>
					</div>
				</Container>
			</FooterTop>
			<Container>
				<FooterMid>
					<div className="FooterMidSections">
						<img src="/images/logo-110x83.png" alt="Urban Sports Hub" /><br/>
						<p>Urban Sports, is the precise address for all your sport needs. Our vision is to develop a fit community all around. Come, Sweat, Live, Love & Hustle!</p>
					</div>
					<div className="FooterMidSections">
						<h4>Quick Links</h4>
						<ul>
							<li><Link to="/about">About</Link></li>
							<li><Link to="/how-the-idea-emerged">How the Idea Emerged?</Link></li>
							<li><Link to="/">Privacy Policy</Link></li>
							<li><Link to="/">Terms & Conditions</Link></li>
						</ul><br/>
						<SocialIcons small />
					</div>
					<div className="FooterMidSections">
						<h4>Find Us</h4>
						<p>
							<i>Address</i><br/>
							Door No: 1-5-318/6/2/1/NR, Surya Nagar, Old Alwal, Telangana - 500010
						</p>
						<p>
							<i>Hours</i><br/>
							Monday-Sunday: 5:00AM - 10:00PM
						</p>
					</div>
				</FooterMid>
			</Container>
			<FooterBottom>
				<Container>
					Copyright © 2019 Urban Sports Hub
				</Container>
			</FooterBottom>
		</FooterWrapper>
	)
}

export default Footer