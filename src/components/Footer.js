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
		width: 33.333%;
		padding: 2rem;
	}
	& .FooterMidSections > img {
		filter: grayscale(1);
		opacity: 0.5;
	}
`
const FooterTop = styled.div`
	background-color: #0e1116;
	
	& .footerTopInner {
		display: flex;
		justify-content: space-between;
		// border-top: 2px solid #0c0f14
		color: #ddd;
	}

	& .footerAside {
		width: 100%;
		padding: 2rem 1rem; 
	}
	& .footerAside > h5 {
		font-weight: 700;
		font-size: 1.125rem;
	}
`
const FooterBottom = styled.div`
	padding: .75rem 0;
	text-align: center;
	font-size: .875rem;
	color: #ddd;
	background-color: #0e1116;
`

const Footer = () => {
	return (
		<FooterWrapper>
			<FooterTop>
				<Container className="footerTopInner">
					<div className="footerAside">
						<h5>Coaching Sessions</h5>
						<p>
							Monday-Friday: 9:00AM - 5:00PM <br/>
							Satuarday & Sunday: 11:00AM - 3:00PM
						</p>
					</div>
					<div className="footerAside">
						<h5>Summer Camp</h5>
						<p>
							Monday-Friday: 9:00AM - 5:00PM <br/>
							Satuarday & Sunday: 11:00AM - 3:00PM
						</p>
					</div>
					<div className="footerAside">
						<h5>Email & Call</h5>
						<p>
							Email: <a href="mailto:urbansportshub@gmail.com">urbansportshub@gmail.com</a><br/>
							Phone: <a href="tel:99999999">+91 9999999999</a>
						</p>
					</div>
				</Container>
			</FooterTop>
			<Container>
				<FooterMid>
					<div className="FooterMidSections">
						<img src="/images/logo-162x55.png" alt="Urban Sports Hub" /><br/>
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
							Plot No: 132,
							Surya Nagar Colony,
							Old Alwal, Secunderabad, Telangana – 500010
						</p>
						<p>
							<i>Hours</i><br/>
							Monday—Friday: 9:00AM–5:00PM
							Saturday & Sunday: 11:00AM–3:00PM
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