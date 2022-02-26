import styled from "styled-components"
import React from "react"
import HeroContainer from "../components/HeroContainer"
import Container from '../components/Container'
import { Helmet } from "react-helmet";

const RestaurantWrapper = styled(HeroContainer)`
  padding: 160px 0 40px 0;
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
`
const RestaurantBackdrop = styled.video.attrs(props => ({
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
  opacity: 0.15;
  z-index: 0
`
const RestaurantHeader = styled.h1`
	font-size: 4rem;
	color: #ddd;
`
const RestaurantContent = styled.div`
    background-color: #150f0f;
    padding-top: 4rem;
    padding-bottom: 4rem;
    & p {
        color: #ddd;
        // color: #0a0a0e;
        font-size: 1.125rem;
    }
`

const Restaurant = () => {
    return (
        <>
        <Helmet>
            <title>Restaurant - Urban Sports Hub</title>
            <meta property="og:title" content="Restaurant - Urban Sports Hub" />
            <meta name="twitter:title" content="Restaurant - Urban Sports Hub" />
        </Helmet>

        <RestaurantWrapper>
            <RestaurantBackdrop>
                <source src="/restaurant.mp4" type="video/mp4" />
            </RestaurantBackdrop>

            <Container>
                <RestaurantHeader>Restaurant</RestaurantHeader>
            </Container>
        </RestaurantWrapper>
        <RestaurantContent>
            <Container>
                <p>Hyderabadi’s are very well known for being foodies. But, are we sure what we eat is safe for our bodies? Do we take the necessary diet that our bodies actually call for? The science tells that diet plays a very major role in being fit. There is no point in expecting a fruitful result with just an intense activity and no proper rich diet styles. All around the world, there is much junk available out rather than a healthy choice.
                <br/><br/>
                Therefore, we at our hub bring food with the best combination of both nutrition and taste together with our own signature blends. Apart from this Hyderabad, being one of the fully loaded cities, have highly accommodating structures such as apartments and high rise towers, etc. Hence, having interesting setup restaurants are our city’s favorites. Food nutrition, taste & quality always top our priority list, but, the ambiance is also equally significant.
                <br/><br/>
                So we have come up with a best container based restaurant that gives a wonderful notion and escape from the reality for time being. Therefore, we bring the best food that can fill the lack of nutrition profile in you as well as fill your tummy, to maintain a good physique. We have multiple options for food that are well calculated and tailored as per your nutritional requirements. We will be very happy to serve you because we understand “Good food is good mood”.</p>
            </Container>
        </RestaurantContent>
        </>
    )
}

export default Restaurant