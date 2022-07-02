import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Container from '../components/Container'
import SocialIcons from '../components/SocialIcons'
import { Helmet } from "react-helmet";
import SiteForm from '../components/form/SiteForm'

const WrapperInner = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding: 1rem 0 2rem 0;
	
	/*|||||||||||||||||||||| Laptop(lg) ||||||||||||||||||||||*/
	@media only screen and (min-width: 992px) {
		padding: 2rem 0 4rem 0;
	}
`
const LeftAside = styled.div`
	width: 100%;
	
	/*|||||||||||||||||||||| Laptop(lg) ||||||||||||||||||||||*/
	@media only screen and (min-width: 992px) {
		width: 40%;
	}
`
const RightAside = styled.div`
	padding: 1rem 0 0 0;
	width: 100%;

	/*|||||||||||||||||||||| Laptop(lg) ||||||||||||||||||||||*/
	@media only screen and (min-width: 992px) {
		padding: 1rem 0 0 4rem;
		width: 60%;
	}
`
const ConatctHeader = styled.h1`
	font-size: ${({sm}) => sm ? '1rem' : '2rem'};
	color: #2e2e2e;
	line-height: 1.2;
	margin-bottom: 1rem;

	/*|||||||||||||||||||||| Laptop(lg) ||||||||||||||||||||||*/
	@media only screen and (min-width: 992px) {
		font-size: ${({sm}) => sm ? '2rem' : '4rem'};
		margin-bottom: ${({sm}) => sm ? '.5rem' : '2rem'};
	}
`

const FrameWrapper = styled.div`
	background-color: #ccc;
	border-top: 1px solid #dfdfdf;
`
const Contact = () => {
	
	return (
		<>
			<Helmet>
                <title>Contact Us - Urban Sports Hub</title>
                <meta property="og:title" content="Contact Us - Urban Sports Hub" />
                <meta name="twitter:title" content="Contact Us - Urban Sports Hub" />
            </Helmet>

			<Container>
				<WrapperInner>
					<LeftAside>
						<ConatctHeader>Contact Us</ConatctHeader>
						<SocialIcons />
					 	<br/>
						<p>
							<strong>Address</strong>: <br/>
							Door No: 1-5-318/6/2/1/NR, Surya Nagar, Old Alwal, Telangana - 500010
							<br/><br/>
							<strong>Email:</strong><br/>
							urbansportshub@gmail.com
							<br/><br/>
							<strong>Phone No.:</strong><br/>
							+91 9182716220
						</p>
					</LeftAside>
					<RightAside>
						<ConatctHeader sm>Get In Touch</ConatctHeader>
						<span>&nbsp;&nbsp;Your personal details are safe with us <strong><Link to="/about">Privacy Policy</Link></strong></span>
						<SiteForm page="Contact Us" />
					</RightAside>
				</WrapperInner>
			</Container>
			<FrameWrapper>
				<iframe
				  	height="400"
				  	style={{ border:0, width: '100%' }}
				  	loading="lazy"
				  	allowFullScreen
				  	src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d475.6101547585157!2d78.50765206992601!3d17.513181782946585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDMwJzQ3LjYiTiA3OMKwMzAnMjguNSJF!5e0!3m2!1sen!2sin!4v1558076431592!5m2!1sen!2sin">
				</iframe>
			</FrameWrapper>
		</>
	)
}

export default Contact