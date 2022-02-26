import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import Container from '../../components/Container'
import HeroContainer from "../../components/HeroContainer"
import membership from "../../membership";
import Gallery from "../../components/Gallery"
import { Helmet } from "react-helmet";

const Wrapper = styled(HeroContainer)`
	background-size: cover;
	background-repeat: no-repeat;
	padding: 140px 0;
	position: relative;
`
const WrapperInner = styled.div`
	position: relative;
	display: flex;
	justify-content: start;
	align-items: center;
	flex-wrap: wrap;
`
const Content = styled.div`
	width: 60%;
	padding: 80px 140px;
	& p {
		white-space: pre-line;
		font-size: 1.125rem;
	}
`
const SectionHeader = styled.h1`
	font-size: 4rem;
	color: #2e2e2e;
	line-height: 1.2;
	margin-bottom: 2rem;
`

const Sport = () => {
	const { sport } = useParams();
	const _sport = membership.find(o => o.name.toLowerCase() == sport.toLowerCase());
  	const hostname = window.location.protocol + '//' + window.location.host;

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
					<SectionHeader>{_sport.name}</SectionHeader>
					<p dangerouslySetInnerHTML={{__html: _sport.content}} ></p>
				</Content>
			</WrapperInner>
		</Wrapper>
	)
}

export default Sport