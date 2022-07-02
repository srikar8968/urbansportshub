import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

const Wrapper = styled.div`
	position: relative;
	display: inline-block;
	z-index: 99999;
`
const TxtWrapper = styled(Link)`
	margin: 0 1.5rem;
	cursor: pointer;
`
const MenuWrapper = styled.nav`
	position: absolute;
	top: 100%;
	left: 0;
	width: 260px;
	padding-top: .875rem;
	z-index: 99999;
`
const MenuItem = styled(Link)`
	padding: 1rem 1.25rem;
	background-color: #fff;
	display: block;
	border-left: 1px solid #ddd;
	border-right: 1px solid #ddd;
	color: #2e2e2e;
	display: flex;
	align-items: center;
	font-size: 1.125rem;

	& > img {
		width: 24px;
		height: 24px;
		margin-right: 1rem;
		opacity: 0.5;
	}

	&:first-child {
		border-top-right-radius: 1rem;
		border-top-left-radius: 1rem;
		border-top: 1px solid #ddd;
	}
	&:last-child {
		border-bottom-right-radius: 1rem;
		border-bottom-left-radius: 1rem;
		border-bottom: 1px solid #ddd;
	}

	&:hover {
		background-color: #ddd;
		color: #2e2e2e;
	}
`

const Menu = ({ items, path, menuItemRef, children }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Wrapper
			className="menuItem"
			ref={menuItemRef}
			onMouseEnter={() => setIsOpen(true)}
			onMouseLeave={() => setIsOpen(false)} >
			<TxtWrapper to={path}>{ children }</TxtWrapper>
			{ isOpen && <MenuWrapper>
				{ items?.map((item, index) => (
					<MenuItem key={index} to={`events/${item.path}`}>
						<img src={`/images/icons/${item.icon}`} alt={item.name} />
						{ item.name }
					</MenuItem>
				)) }
			</MenuWrapper> }
		</Wrapper>
	)
}

export default Menu