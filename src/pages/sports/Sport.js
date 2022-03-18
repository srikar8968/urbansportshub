import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom'
import Container from '../../components/Container'
import HeroContainer from "../../components/HeroContainer"
import membership from "../../membership";
import Gallery from "../../components/Gallery"
import { Helmet } from "react-helmet";
import { timeline } from 'motion'

const Wrapper = styled(HeroContainer)`
	background-size: cover;
	background-repeat: no-repeat;
	padding: 90px 0 0 0;
	position: relative;
	text-align: center;

	/*|||||||||||||||||||||| Laptop(lg) ||||||||||||||||||||||*/
	@media only screen and (min-width: 992px) {
		padding: 140px 0;
	}
`
const WrapperInner = styled.div`
	position: relative;
	display: flex;
	justify-content: start;
	align-items: start;
	flex-wrap: wrap;
	text-align: left;
`
const Content = styled.div`
	width: 100%;
	order: 0;
	padding: 35px;
	overflow: hidden;

	& p {
		white-space: pre-line;
		font-size: 1.125rem;
	}

	/*|||||||||||||||||||||| Laptop(lg) ||||||||||||||||||||||*/
	@media only screen and (min-width: 992px) {
        width: 60%;
		order: 1;
		padding: 80px 140px;
	}
`
const SectionHeader = styled.h1`
	font-size: 3rem;
	color: #2e2e2e;
	line-height: 1.2;
	margin-bottom: 1rem;

	/*|||||||||||||||||||||| Laptop(lg) ||||||||||||||||||||||*/
	@media only screen and (min-width: 992px) {
        font-size: 4rem;
		margin-bottom: 2rem;
	}
`
const Button = styled(Link)`
	padding: 1rem 2rem;
	border: 2px solid #1e1e1e;
	color: #1e1e1e;
	font-weight: 600;
	border-radius: 2rem;
	display: inline-block;
	margin: 0 auto;
`

const Sport = () => {
	const { sport } = useParams();
	const _sport = membership.find(o => o.name.toLowerCase() == sport.toLowerCase());
  	const hostname = window.location.protocol + '//' + window.location.host;
	const titleRef = useRef(null);
	const contentRef = useRef(null);

	useEffect(() => {
		const sequence = [
			[titleRef.current, { y : [-80, 0], opacity: [0, 1] }],
			[contentRef.current, { y : [80, 0], opacity: [0, 1] }]
		]
		timeline(sequence, { defaultOptions: { duration: 0.5 } });
	}, [sport])
	  
	return (
		<Wrapper>
			<Helmet>
                <title>{ _sport.name } - Urban Sports Hub</title>
                <meta name="description" content={_sport.description} />
                <meta property="og:description" content={_sport.description} />
                <meta property="og:title" content={`${_sport.name} - Urban Sports Hub`} />
                <meta property="og:image" content={`${hostname}/images/sports/${sport}/1.${_sport.imageFormat}`} />
                <meta name="twitter:title" content={`${_sport.name} - Urban Sports Hub`} />
            </Helmet>
			<WrapperInner>
				<Gallery sport={sport} format={_sport.imageFormat} />
				<Content>
					<SectionHeader ref={titleRef}>{_sport.name}</SectionHeader>
					<p ref={contentRef} dangerouslySetInnerHTML={{__html: _sport.content}} ></p>
				</Content>
			</WrapperInner>
			<Button to="/membership#priceList">View Membership Plans</Button>
		</Wrapper>
	)
}

export default Sport