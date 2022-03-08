import React from 'react'
import membership from '../membership'
import styled from 'styled-components'
import Container from '../components/Container'
import HeroContainer from '../components/HeroContainer'
import SportsGallery from '../components/SportsGallery'
import { Helmet } from "react-helmet";

const HeroWrapper = styled(HeroContainer)`
  padding: 160px 0 80px 0;
  min-height: auto;
  overflow: hidden;
  background-color: #0a0a0e;
  background-image: url('/images/badminton.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    backdrop-filter: blur(0px);
    z-index: 0
  }

    /*|||||||||||||||||||||| Laptop(lg) ||||||||||||||||||||||*/
	@media only screen and (min-width: 992px) {
        min-height: 100vh;
	}
`
const HeroBackdrop = styled.video.attrs(props => ({
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
  z-index: 0
`
const HeroContent = styled.div`
  position: relative;
  text-align: center;
  z-index: 1
`
const HeroTagline = styled.div`
    color: var(--primary);
    font-size: 1.5rem;
    margin-bottom: .5rem;
    position: relative;
    display: inline-block;

    &::before, &::after {
        content: "";
        position: absolute;
        top: 50%;
        height: 2px;
        width: 20%;
        z-index: 1;
        background-color: var(--primary);
        border-radius: 4px;
    }

    &::before {
        right: calc(100% + 1rem);
    }
    &::after {
        left: calc(100% + 1rem);
    }
`
const HeroTitle = styled.h1`
    font-size: 4rem;
    font-weight: 800;
    color: rgba(255, 255, 255, 1);
    line-height: 1.2;
    
    /*|||||||||||||||||||||| Laptop(lg) ||||||||||||||||||||||*/
	@media only screen and (min-width: 992px) {
        font-size: 6rem;
        line-height: 1.25
	}
    /*|||||||||||||||||||||| Desktop(xl) ||||||||||||||||||||||*/
	@media only screen and (min-width: 1200px) {
	    font-size: 7rem;
	}
`
const ClientWrapper = styled.div`
    background-image: linear-gradient(to right, #050609, #0c0f14);
    padding: 0rem;
`
const ClientSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    /*|||||||||||||||||||||| Laptop(lg) ||||||||||||||||||||||*/
	@media only screen and (min-width: 992px) {
        justify-content: space-between;
	}
`
const ClientItem = styled.div`
    width: 120px;
    height: 120px;
    flex-shrink: 0;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 1rem;

    /*|||||||||||||||||||||| Mobile(sm) ||||||||||||||||||||||*/
	@media only screen and (min-width: 576px) {

	}

	/*|||||||||||||||||||||| Tablet(md) ||||||||||||||||||||||*/
	@media only screen and (min-width: 768px) {

	}

	/*|||||||||||||||||||||| Laptop(lg) ||||||||||||||||||||||*/
	@media only screen and (min-width: 992px) {
        height: 150px;
        width: 150px;
	}

	/*|||||||||||||||||||||| Desktop(xl) ||||||||||||||||||||||*/
	@media only screen and (min-width: 1200px) {

	}
`

const Home = () => {
    const clients = ['nike', 'apple', 'target', 'mcdonalds', 'zippo'];

	return (
        <>
            <Helmet>
                <title>Home - Urban Sports Hub</title>
                <meta property="og:title" content="Home - Urban Sports Hub" />
                <meta name="twitter:title" content="Home - Urban Sports Hub" />
            </Helmet>
    		<HeroWrapper>
                <HeroBackdrop>
                    <source src="/badminton.mp4" type="video/mp4" />
                </HeroBackdrop>
    			<HeroContent>
                    <Container>
                        <HeroTagline>urban sports hub</HeroTagline>
                        <HeroTitle>Come, find your <span className="txt-primary">Sport</span> here!</HeroTitle>
                    </Container>
                </HeroContent>
    		</HeroWrapper>

            <ClientWrapper>
                <Container>
                    <ClientSection>
                        { clients.map(client => (
                            <ClientItem key={client}>
                                <img src={`/images/brands/${client}.svg`} alt={client} />
                            </ClientItem>
                        )) }
                    </ClientSection>
                </Container>
            </ClientWrapper>
            
            <SportsGallery membership={membership} />
        </>
	)
}

export default Home