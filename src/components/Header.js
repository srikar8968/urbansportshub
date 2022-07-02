import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Link, useLocation } from "react-router-dom";
import { animate, spring, stagger, timeline } from "motion"
import Container from './Container'
import Menu from './Menu'
import events from '../events'

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
	justify-content: center;
	align-items: center;
	position: relative;

	/*|||||||||||||||||||||| Laptop(lg) ||||||||||||||||||||||*/
	@media only screen and (min-width: 992px) {
		justify-content: space-between;
	}
`
const Logo = styled.img`
	width: 120px;
	// height: 83px;
`
const NavigationList = styled.nav`
	color: ${({theme}) => theme === 'dark' ? '#fff' : '#000'};
	font-size: 1rem;
	display: none;

	& > a + a {
		display: inline-block;
		margin-left: 1.5rem;
	}

	& > a:hover {
		color: var(--primary)
	}

	/*|||||||||||||||||||||| Laptop(lg) ||||||||||||||||||||||*/
	@media only screen and (min-width: 992px) {
		display: block;
	}
`
const MenuWrapper = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	width: 320px;
	padding: 2rem;
	z-index: 20;
	background-color: rgba(0,0,0,0.9);
	backdrop-filter: blur(8px);
	color: #ddd;
	overflow-y: scroll;
	overflow-x: hidden;
	opacity: 0;
	
	& > .mb-logo {
		margin-bottom: 2rem;
		display: block;
		// filter: grayscale(1);
		// opacity: 0.4
	}
	& > a, & > .menuItem {
		display: block;
		font-size: 1.5rem;
		line-height: 1.5;
		color: #808080;
		margin-bottom: 1rem;
		transform: translateX(80px)
		opacity: 0;
	}
	& > .menuItem > span {
		margin-left: 0 !important;
	}
	& > a > img {
		margin: 0 auto;
	}

	/*|||||||||||||||||||||| Laptop(lg) ||||||||||||||||||||||*/
	@media only screen and (min-width: 992px) {
        display: none;
	}
`
const MenuCloseBtn = styled.button`
	position: absolute;
	top: 0;
	right: 0;
	padding: 1rem;

	& > svg {
		width: 1.25rem;
		height: 1.25rem;
	}
`
const MenuOpenBtn = styled.button`
	position: absolute;
	top: 50%;
	right: 0;
	transform: translateY(-50%);
	padding: 1rem;
	color: ${({theme}) => theme === 'dark' ? '#fff' : '#727272'};

	& > svg {
		width: 1.25rem;
		height: 1.25rem;
	}
	/*|||||||||||||||||||||| Laptop(lg) ||||||||||||||||||||||*/
	@media only screen and (min-width: 992px) {
        display: none;
	}
`

const Header = ({ theme }) => {
	const location = useLocation();
	const headerRef = useRef(null);
	const logoRef = useRef(null);
	const menuRef = useRef(null);
	const menuItemsRef = useRef([]);
	const [scrollActive, setScrollActive] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		}
	}, []);

	useEffect(() => {
		setMenuOpen(false);
	}, [location.pathname])

	useEffect(() => {
		const sequence = [
			[menuRef.current, { x: menuOpen ? 0 : 320, opacity: menuOpen ? 1 : 0 }],
			[menuItemsRef.current, { x : menuOpen ? 0 : 80, opacity: menuOpen ? 1 : 0 }, { delay: stagger(0.1) }],
		];
		timeline(sequence, { defaultOptions: { ease: spring() }});
	}, [menuOpen])

	const handleScroll = event => {
		let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
		
		if(scrollTop > 80) {
			setScrollActive(true);
			animate(headerRef.current, { height: '70px' });
			animate(logoRef.current, { height: '50px', width: '66px' });
		} else {
			setScrollActive(false);
			animate(headerRef.current, { height: '120px' });
			animate(logoRef.current, { height: '91px', width: '120px' });
		}
	}

	return (
		<>
			<MenuWrapper ref={menuRef}>
				<MenuCloseBtn onClick={() => setMenuOpen(false)}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
				</MenuCloseBtn>
				<Link className="mb-logo" to="/">
					<Logo ref={logoRef} src="/images/logo-110x83.png" alt="Urban Sports Hub" />
				</Link>
				<Link ref={el => menuItemsRef.current[0] = el} to="/about">About</Link>
				<Link ref={el => menuItemsRef.current[1] = el} to="/sports">Sports</Link>
				<Link ref={el => menuItemsRef.current[2] = el} to="/membership">Memberships</Link>
				<Menu menuItemRef={el => menuItemsRef.current[3] = el} path="/pool-based-party-lounge" items={[...events]}>| Events</Menu>
				{/* <Link ref={el => menuItemsRef.current[4] = el} to="/pool-based-party-lounge">Party Lounge</Link> */}
				<Link ref={el => menuItemsRef.current[4] = el} to="/restaurant">Restaurant</Link>
				<Link ref={el => menuItemsRef.current[5] = el} to="/gallery">Gallery</Link>
				<Link ref={el => menuItemsRef.current[6] = el} to="/contact">Contact</Link>
			</MenuWrapper>
			<Wrapper theme={theme} ref={headerRef} active={scrollActive}>
				<Container>
					<WrapperInner>
						<Link to="/">
							<Logo ref={logoRef} src="/images/logo-120x91.png" alt="Urban Sports Hub" />
						</Link>
						<NavigationList theme={theme}>
							<Link to="/about">About</Link>
							<Link to="/sports">Sports</Link>
							<Link to="/membership">Memberships</Link>
							<Menu path="/pool-based-party-lounge" items={[...events]}>Events</Menu>
							{/* <Link to="/pool-based-party-lounge">Party Lounge</Link> */}
							<Link to="/restaurant">Restaurant</Link>
							<Link to="/gallery">Gallery</Link>
							<Link to="/contact">Contact</Link>
						</NavigationList>
						<MenuOpenBtn onClick={() => setMenuOpen(true)} theme={theme}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
						</MenuOpenBtn>
					</WrapperInner>
				</Container>
			</Wrapper>
		</>
	)
}

export default Header