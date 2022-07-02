import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom'
import Container from '../../components/Container'
import HeroContainer from "../../components/HeroContainer"
import events from "../../events";
import { Helmet } from "react-helmet";
import { timeline } from 'motion'
import SiteForm from '../../components/form/SiteForm'

const Wrapper = styled(HeroContainer)`
  padding: 0;
  overflow: hidden;
  background-color: ${({theme}) => theme};
  color: #fff;

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
    }
`

const WrapperInner = styled.div`
	display: flex;
	flex-wrap: wrap;
`

const LeftAside = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	background-image: url('/images/events/${({bgImg}) => bgImg}');
	background-color: #fff;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	padding: 120px 20px 40px 20px;
	flex-shrink: 0;

	/*|||||||||||||||||||||| Laptop(lg) ||||||||||||||||||||||*/
    @media only screen and (min-width: 992px) {
		width: 40%;
		padding: 120px 40px;
    }

	&::before {
		content: "";
		background-color: ${({theme}) => theme};
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		opacity: 0.65;
	}
`
const RightAside = styled.div`
	width: 100%;
	padding: 40px 20px;
	opacity: 0;

	/*|||||||||||||||||||||| Laptop(lg) ||||||||||||||||||||||*/
	@media only screen and (min-width: 992px) {
		width: 60%;
		padding: 140px 40px;
    }
`

const SectionHeader = styled.h1`
	font-size: 3rem;
	opacity: 0;
	font-weight: 900;
	color: #fff;
	text-shadow: 2px 0 0 ${({theme}) => theme}, -2px 0 0 ${({theme}) => theme}, 0 2px 0 ${({theme}) => theme}, 0 -2px 0 ${({theme}) => theme}, 1px 1px ${({theme}) => theme}, -1px -1px 0 ${({theme}) => theme}, 1px -1px 0 ${({theme}) => theme}, -1px 1px 0 ${({theme}) => theme};
	line-height: 1.2;
	margin-bottom: 1rem;

	/*|||||||||||||||||||||| Laptop(lg) ||||||||||||||||||||||*/
	@media only screen and (min-width: 992px) {
        font-size: 5rem;
		margin-bottom: 2rem;
	}
`

const Events = () => {
	const { event } = useParams();
	const _event = events.find(o => o.path.toLowerCase() == event.toLowerCase());
  	const hostname = window.location.protocol + '//' + window.location.host;
	const titleRef = useRef(null);
	const contentRef = useRef(null);

	useEffect(() => {
		const sequence = [
			[titleRef.current, { x : [-80, 0], opacity: [0, 1] }],
			[contentRef.current, { x : [80, 0], opacity: [0, 1] }]
		]
		timeline(sequence, { defaultOptions: { duration: 0.5 } });
	}, [event]);
	  
	return (
		<Wrapper theme={_event.theme}>
			<Helmet>
                <title>{ _event.name } - Urban events Hub</title>
                <meta name="description" content={_event.description} />
                <meta property="og:description" content={_event.description} />
                <meta property="og:title" content={`${_event.name} - Urban events Hub`} />
                <meta property="og:image" content={`${hostname}/images/events/${event}/1.${_event.imageFormat}`} />
                <meta name="twitter:title" content={`${_event.name} - Urban events Hub`} />
            </Helmet>
			<WrapperInner>
				<LeftAside bgImg={_event.image} theme={_event.theme}>
					<SectionHeader theme={_event.theme} ref={titleRef}>{_event.name}</SectionHeader>
				</LeftAside>
				<RightAside ref={contentRef}>
					<small>&nbsp;&nbsp;&nbsp;Please fill in your details in below form.</small>
					<SiteForm page={_event.name} theme="#fff" type="events" />
				</RightAside>
			</WrapperInner>
		</Wrapper>
	)
}

export default Events