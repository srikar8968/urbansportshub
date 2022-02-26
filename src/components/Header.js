import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { animate } from "motion"
import Container from './Container'

const Wrapper = styled.div`
	background-color: ${({active, theme}) => active ? (theme === 'dark' ? 'rgba(5, 6, 9, 0.9)' : 'rgba(255,255,255,0.8)') : 'none'};
	backdrop-filter: ${({active}) => active ? 'blur(6px)' : 'none'};
	padding: .5rem 0;
	height: 120px;
	display: flex;
	align-items: center;
	position: fixed;
	width: 100%;
	left: 0;
	top: 0;
	z-index: 10;
`
const WrapperInner = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`
const Logo = styled.img`
	width: 162px;
	height: 56px
`
const NavigationList = styled.nav`
	color: ${({theme}) => theme === 'dark' ? '#ddd' : '#000'};
	font-size: 1rem;

	& > a + a {
		display: inline-block;
		margin-left: 1.5rem;
	}

	& > a:hover {
		color: var(--primary)
	}
`

const Header = ({ theme }) => {
	const headerRef = useRef(null);
	const logoRef = useRef(null);
	const [scrollActive, setScrollActive] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll);
		}
	}, []);

	const handleScroll = event => {
		let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
		
		if(scrollTop > 80) {
			setScrollActive(true);
			animate(headerRef.current, { height: '70px' });
			animate(logoRef.current, { height: '40px', width: '118px' });
		} else {
			setScrollActive(false);
			animate(headerRef.current, { height: '120px' });
			animate(logoRef.current, { height: '55px', width: '162px' });
		}
	}

	return (
		<Wrapper theme={theme} ref={headerRef} active={scrollActive}>
			<Container>
				<WrapperInner>
					<Link to="/">
						<Logo ref={logoRef} src="/images/logo-162x55.png" alt="Urban Sports Hub" />
					</Link>
					<NavigationList theme={theme}>
						<Link to="/about">About</Link>
						<Link to="/sports">Sports</Link>
						<Link to="/membership">Memberships</Link>
						<Link to="/pool-based-party-lounge">Party Lounge</Link>
						<Link to="/restaurant">Restaurant</Link>
						<Link to="/contact">Contact</Link>
					</NavigationList>
				</WrapperInner>
			</Container>
		</Wrapper>
	)
}

export default Header