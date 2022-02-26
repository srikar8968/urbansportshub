import { useState } from "react"
import styled from "styled-components"
import Container from "../components/Container"
import { Helmet } from "react-helmet";

const EmergenceWrapper = styled.div`
    padding: 40px 0;
    font-size: 1.125rem;
    & ul {
		list-style: disc;
		padding: 8px 0 0 32px;
	}
`

const EmergenceHeaderSection = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 5rem;
	& > img {
		object-fit: cover;
		max-height: 280px;
		width: 420px;
        flex-shrink: 0;
		max-width: 100%;
		margin-left: 2rem;
		border-radius: 19% 81% 70% 30% / 36% 34% 66% 64% ;
		background-color: #ddd;
	}
`
const EmergenceHeader = styled.h1`
	font-size: 4rem;
	color: #2e2e2e;
	line-height: 1.2;
`
const EmergenceSubHeader = styled.h2`
	font-size: 1.25rem;
	font-weight: 600;
	color: #bbb;
	letter-spacing: 5px;
`


const Emergence = () => {
    const [activeEmergence, setActiveEmergence] = useState(0);

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
						<EmergenceSubHeader>Urban Sports Hub</EmergenceSubHeader>
						<EmergenceHeader>How the Idea Emerged?</EmergenceHeader>
					</div>
					<img src="/images/pages/membership-alt.jpg" alt="How the Idea Emerged?" />
				</EmergenceHeaderSection>
                <div>
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