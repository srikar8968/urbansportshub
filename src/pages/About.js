import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import HeroContainer from '../components/HeroContainer'
import Container from '../components/Container'
import { Helmet } from "react-helmet";
import { animate, stagger, timeline } from 'motion';

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
	margin-bottom: 1rem;
	& > img {
		display: none;
		width: 320px;
		min-height: 213px;
        flex-shrink: 0;
		max-width: 100%;
		margin-left: 2rem;
		border-radius: 19% 81% 70% 30% / 36% 34% 66% 64% ;
		background-color: #ddd;
		// box-shadow: 0px 0px 20px 2px #ddd;
		opacity: 0;
	}

	/*|||||||||||||||||||||| Laptop(lg) ||||||||||||||||||||||*/
	@media only screen and (min-width: 992px) {
		margin-bottom: 4rem;
		
        & > img {
			display: block;
		}
	}
	/*|||||||||||||||||||||| Desktop(xl) ||||||||||||||||||||||*/
	@media only screen and (min-width: 1200px) {
		& > img {
			width: 420px;
			min-height: 280px;
		}
	}
`
const AboutHeader = styled.h1`
	font-size: 3rem;
	color: #2e2e2e;
	line-height: 1.2;
	opacity: 0;
	
	/*|||||||||||||||||||||| Laptop(lg) ||||||||||||||||||||||*/
	@media only screen and (min-width: 992px) {
        font-size: 4rem;
	}
`
const AboutSubHeader = styled.h2`
	font-size: 1rem;
	font-weight: 600;
	color: #bbb;
	letter-spacing: 5px;
	opacity: 0;

	/*|||||||||||||||||||||| Laptop(lg) ||||||||||||||||||||||*/
    @media only screen and (min-width: 992px) {
        font-size: 1.25rem;
    }
`

const About = () => {
	const titleRef = useRef([]);
	const imgRef = useRef(null);
	const contentRef = useRef(null);

	useEffect(() => {
		const sequence = [
			[titleRef.current, { x : [-150, 0], opacity: [0, 1] }, { delay: stagger(0.2) }],
			[imgRef.current, { scale: [0.75, 1], opacity: [0, 1] }],
			[contentRef.current, { opacity: [0, 1] }]
		]
		timeline(sequence, { defaultOptions: { duration: 0.5 } });
	}, [])

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
						<AboutSubHeader ref={el => titleRef.current[0] = el}>ABOUT US</AboutSubHeader>
						<AboutHeader ref={el => titleRef.current[1] = el}>We are a young multisport hub</AboutHeader>
					</div>
					<img ref={imgRef} src="/images/pages/golf.jpg" alt="about-us" />
				</AboutHeaderSection>
				<div ref={contentRef}>We are a young multisport hub from Hyderabad based at Alwal, Secunderabad. India has been a very fit nation in the good olden times, and the very major reason for this is their outstanding muscular routine and intense sporting culture. This made the nations to turn their head towards our very own originated sports such as kabaddi and antiquated hockey & badminton etc. and imbibed the sports to their routine and having healthy and fit lifestyles. Now, it’s our turn to get back to the pavilion and attain personal fitness, which our nation is running behind these days.
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
					<li>Yoga</li>
					<li>Zumba</li>
					<li>Lawn Tennis</li>
				</ul>
				<br/>
				Apart from this, we provide units such as restaurants and a pool-side party lounge to give you pleasing, cozy and a relishing experience out of the hectic day you have. The facilities for the members include:
				<ul>
					<li>24/7 CCTV Surveillance</li>
					<li>Safety Lockers</li>
					<li>Personalised Trainers</li>
					<li>Coaching Camps</li>
					<li>Ladies Exclusive Slots</li>
					<li>COVID Safety Protocol</li>
					<li>Nutritionist Consultation</li>
					<li>Sports Accessories</li>
					<li>Refreshments</li>
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