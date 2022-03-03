import styled from "styled-components"
import React, { useEffect, useRef } from "react"
import HeroContainer from "../components/HeroContainer"
import Container from '../components/Container'
import { Helmet } from "react-helmet";
import { timeline } from "motion";

const LoungeWrapper = styled(HeroContainer)`
  padding: 140px 0 20px 0;
  overflow: hidden;
  background-color: #0a0a0e;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  /*|||||||||||||||||||||| Laptop(lg) ||||||||||||||||||||||*/
    @media only screen and (min-width: 992px) {
        padding: 160px 0 40px 0;
    }
`
const LoungeBackdrop = styled.video.attrs(props => ({
  autoPlay: "true",
  muted: "true",
  loop: "true",
  playsinline: "true",
  preload: "auto",
  poster: "/images/poster.jpg"
}))`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  bottom: 0;
  left: 0;
  opacity: 0.3;
  z-index: 0
`
const LoungeHeader = styled.h1`
	font-size: 2rem;
    line-height: 1.2;
	color: #ddd;

    /*|||||||||||||||||||||| Laptop(lg) ||||||||||||||||||||||*/
	@media only screen and (min-width: 992px) {
        font-size: 4rem;
	}
`
const LoungeContent = styled.div`
    background-color: #1d2534;
    padding-top: 2rem;
    padding-bottom: 2rem;
    & p {
        color: #ddd;
        font-size: 1.125rem;
    }
    /*|||||||||||||||||||||| Laptop(lg) ||||||||||||||||||||||*/
    @media only screen and (min-width: 992px) {
        padding-top: 4rem;
        padding-bottom: 4rem;
    }
`

const Lounge = () => {
    const titleRef = useRef(null);
	const contentRef = useRef(null);

	useEffect(() => {
		const sequence = [
			[titleRef.current, { y: [150, 0], opacity: [0, 1] }],
			[contentRef.current, { opacity: [0, 1] }]
		]
		timeline(sequence, { defaultOptions: { duration: 0.5 } });
	}, [])
    return (
        <>
        <Helmet>
            <title>Pool-Based Party Lounge - Urban Sports Hub</title>
            <meta property="og:title" content="Pool-Based Party Lounge - Urban Sports Hub" />
            <meta name="twitter:title" content="Pool-Based Party Lounge - Urban Sports Hub" />
        </Helmet>
        
        <LoungeWrapper>
            <LoungeBackdrop>
                <source src="/party-lounge.mp4" type="video/mp4" />
            </LoungeBackdrop>

            <Container>
                <LoungeHeader ref={titleRef}>Pool-Based Party Lounge</LoungeHeader>
            </Container>
        </LoungeWrapper>
        <LoungeContent>
            <Container ref={contentRef}>
                <p>Don’t you get excited with the theme based party styles? I’m sure you will love it!
                <br/><br/>
                Being a plateau, there is a lack of beach sites & lakes here, so waterside parties are always exciting and amazing to the citizens. Our open-air poolside party lounge will best suit all your occasions and celebrations. The open-air space gives a breathtaking backdrop of the city’s skyline. The poolside view gives you a relaxed, soothing and a splendid experience by giving you a break from the tough and busy schedules. There is room for up to 200 guests that are sure to make your most precious occasion a day to remember with upbeat music, vibrant decorations and sport themed experience, etc. We also cater to all types of cuisine cooked by our expert chefs.  
                <br/><br/>
                You further have any other request, describe it over a call and we will get the best-customized plan for you. So, I invite all my lovely Hyderabadi’s to come, enquire and join a membership including a poolside party lounge to revive life! By launching a party lounge we are sure to win hearts and make urban sports community much stronger than ever like another family.</p>
            </Container>
        </LoungeContent>
        </>
    )
}

export default Lounge