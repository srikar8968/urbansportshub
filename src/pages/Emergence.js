import { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import Container from "../components/Container"
import { Helmet } from "react-helmet";
import { stagger, timeline } from "motion";

const EmergenceWrapper = styled.div`
    padding: 20px 0;
    font-size: 1.125rem;
    & ul {
		list-style: disc;
		padding: 8px 0 0 32px;
	}

    /*|||||||||||||||||||||| Laptop(lg) ||||||||||||||||||||||*/
    @media only screen and (min-width: 992px) {
        padding: 40px 0;
    }
`

const EmergenceHeaderSection = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 1rem;
	& > img {
		object-fit: cover;
		display: none;
        width: 320px;
        max-height: 213px;
        flex-shrink: 0;
        max-width: 100%;
        margin-left: 2rem;
        border-radius: 19% 81% 70% 30% / 36% 34% 66% 64% ;
        background-color: #ddd;
        opacity: 0;
	}

    /*|||||||||||||||||||||| Laptop(lg) ||||||||||||||||||||||*/
    @media only screen and (min-width: 992px) {
        margin-bottom: 5rem;
        
        & > img {
            display: block;
        }
    }
    /*|||||||||||||||||||||| Desktop(xl) ||||||||||||||||||||||*/
    @media only screen and (min-width: 1200px) {
        & > img {
            width: 420px;
            max-height: 280px;
        }
    }
`
const EmergenceHeader = styled.h1`
	font-size: 2rem;
	color: #2e2e2e;
	line-height: 1.2;
    opacity: 0;

    /*|||||||||||||||||||||| Laptop(lg) ||||||||||||||||||||||*/
    @media only screen and (min-width: 992px) {
        font-size: 4rem;
    }
`
const EmergenceSubHeader = styled.h2`
    font-size: 1rem;
    font-weight: 600;
    color: #bbb;
    letter-spacing: 5px;

    /*|||||||||||||||||||||| Laptop(lg) ||||||||||||||||||||||*/
    @media only screen and (min-width: 992px) {
        font-size: 1.25rem;
    }
`


const Emergence = () => {
    const titleRef = useRef([]);
	const contentRef = useRef(null);
	const imgRef = useRef(null);

	useEffect(() => {
		const sequence = [
			[titleRef.current, { x : [-150, 0], opacity: [0, 1] }, { delay: stagger(0.2) }],
			[imgRef.current, { scale: [0.75, 1], opacity: [0, 1] }],
			[contentRef.current, { opacity: [0, 1] }]
		]
		timeline(sequence, { defaultOptions: { duration: 0.5 } });
	}, [])

    return (
        <EmergenceWrapper>
        	<Helmet>
                <title>How the Idea Emerged? - Urban Sports Hub</title>
                <meta property="og:title" content="How the Idea Emerged? - Urban Sports Hub" />
                <meta name="twitter:title" content="How the Idea Emerged? - Urban Sports Hub" />
            </Helmet>

            <Container>
                <EmergenceHeaderSection>
					<div>
						<EmergenceSubHeader ref={el => titleRef.current[0] = el}>Urban Sports Hub</EmergenceSubHeader>
						<EmergenceHeader ref={el => titleRef.current[1] = el}>How the Idea Emerged?</EmergenceHeader>
					</div>
					<img ref={imgRef} src="/images/pages/membership-alt.jpg" alt="How the Idea Emerged?" />
				</EmergenceHeaderSection>
                <div ref={contentRef}>
                    <div>Are you aware of the sports we provide? Do you love them? You are aware of the benefits? You have made yourself to get fit? Then why wait? Come, find and grab the Emergences at our venture with most reasonable prices according to your choice of sport. We have a conviction that “You don’t have to be great to start, but you have to start to be great!” If the thought of new sporting routine excites you, implementing the regime is much more fun and exciting. So look no further and get started now.
                    <br/><br/>
                    We also provide Emergences for services in different periods, levels and combinations too. Ask for our quarterly, half yearly and annual Emergences for extra benefits because “Fitness is not a destination, it’s a way of life” and “The consistency is what transforms an average into excellence!”
                    <br/><br/>
                    Not interested to enter alone? Worrying about your partner or family member’s health? Get yourselves here. Make an extended community including your people. The scientists say the heart is much happier when you sweat, upon this with your own people around, definitely a perfect blend!
                    <br/><br/>
                    Not aware of the benefits associated with group workout? No issues get your eyeballs keenly down here:
                    <ul>
                        <li>Increase your commitment to a fitness routine</li>
                        <li>Get a competitive edge</li>
                        <li>Increases happiness in your relationship</li>
                        <li>Pushing yourself harder than before</li>
                        <li>Get external motivation when you’re dragging</li>
                        <li>Find support & accountability in being part of a team</li>
                        <li>Above all, much time with your mates. Oh man that’s a boon for you, isn’t it?</li>
                    </ul>
                    <br/>
                    Now think, aren’t they wonderful? You are definitely concerned about your dear ones, isn’t it? So push yourselves and your dearest with love & excitement and you know what, you will be rewarded for this!</div>
                </div>
            </Container>
        </EmergenceWrapper>
    )
}

export default Emergence