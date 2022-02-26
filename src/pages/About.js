import React from 'react'
import styled from 'styled-components'
import HeroContainer from '../components/HeroContainer'
import Container from '../components/Container'
import { Helmet } from "react-helmet";

const AboutWrapper = styled(HeroContainer)`
	padding: 140px 0;
	background-image: url('/images/pages/golf.jpg');
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	font-size: 1.125rem;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(255,255,255,0.85);
	}
	& ul {
		list-style: disc;
		padding: 8px 0 0 32px;
	}
`
const AboutHeaderSection = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 4rem;
	& > img {
		width: 420px;
		min-height: 280px;
        flex-shrink: 0;
		max-width: 100%;
		margin-left: 2rem;
		border-radius: 19% 81% 70% 30% / 36% 34% 66% 64% ;
		background-color: #ddd;
		box-shadow: 0px 0px 20px 2px #ddd;
	}
`
const AboutHeader = styled.h1`
	font-size: 4rem;
	color: #2e2e2e;
	line-height: 1.2;
`
const AboutSubHeader = styled.h2`
	font-size: 1.25rem;
	font-weight: 600;
	color: #bbb;
	letter-spacing: 5px;
`

const About = () => {
	return (
		<AboutWrapper>
			<Helmet>
                <title>About Us - Urban Sports Hub</title>
                <meta property="og:title" content="About Us - Urban Sports Hub" />
                <meta name="twitter:title" content="About Us - Urban Sports Hub" />
            </Helmet>
            
			<Container>
				<AboutHeaderSection>
					<div>
						<AboutSubHeader>ABOUT US</AboutSubHeader>
						<AboutHeader>We are a young multisport hub</AboutHeader>
					</div>
					<img src="/images/pages/golf.jpg" alt="about-us" />
				</AboutHeaderSection>
				<div>We are a young multisport hub from Hyderabad based at Alwal, Secunderabad. India has been a very fit nation in the good olden times, and the very major reason for this is their outstanding muscular routine and intense sporting culture. This made the nations to turn their head towards our very own originated sports such as kabaddi and antiquated hockey & badminton etc. and imbibed the sports to their routine and having healthy and fit lifestyles. Now, it’s our turn to get back to the pavilion and attain personal fitness, which our nation is running behind these days.
				<br/><br/>
				Therefore, understanding the physical as well as mental, physical strain and the polluted environments the Hyderabadi’s are being through, this hub strives to provide you best version of fun, fitness, and fabulousness together helping you to revive from the sedentary and hectic lifestyles. Understanding the scarcity of resources and the restraining conditions, we promise to present you a massive & spacious sporting arena with cultivated teams, brilliant & flawless equipment, comfortable amenities & facilities and many more.
				<br/><br/>
				A round of intense sport is the best option that can get you out of the fatigue & lethargy and help you to relish. The country has made a shift in trend from single disciplinary sport to multidisciplinary sporting. Hence, we provide multiple disciplined sports that are trending in the nation and best suit your interest.
				<br/><br/>
				The motto behind to offer multiple fitness practices is to pick the one that best suits your interest and lifestyle, because “Fitness is not a destination, rather it’s a way of life”.
				<ul>
					<li>Swimming pool</li>
					<li>Futsal</li>
					<li>Gymnasium</li>
					<li>Badminton Court</li>
					<li>Cricket</li>
				</ul>
				<br/>
				Apart from this, we provide units such as restaurants and a pool-side party lounge to give you pleasing, cozy and a relishing experience out of the hectic day you have. The facilities for the members include:
				<ul>
					<li>Parking Area</li>
					<li>Dressing &amp; Locker Rooms</li>
					<li>Washrooms</li>
					<li>Wi-Fi</li>
					<li>First Aid</li>
					<li>Drinking Water</li>
					<li>Waiting Lounge</li>
				</ul>
				<br/>
				So, choose to sport for being fit, because we strongly believe and promulgate that, “At the end, all that matters is, to take proper care of our body. It’s the only place we have to live in”. Want to find other details regarding the sports and amenities, get into the sports and certain pages on the header menu above.</div>
			</Container>
		</AboutWrapper>
	)
}

export default About