import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

const Container = styled.div`
	width: 100%;
  	max-width: 100%;
  	padding: 0 30px;
  	margin: 0 auto;
  	position: relative;

	/*|||||||||||||||||||||| Mobile(sm) ||||||||||||||||||||||*/
	@media only screen and (min-width: 576px) {
	    max-width: 540px;
	}

	/*|||||||||||||||||||||| Tablet(md) ||||||||||||||||||||||*/
	@media only screen and (min-width: 768px) {
	    max-width: 720px;
	    padding: 0 30px;
	}

	/*|||||||||||||||||||||| Laptop(lg) ||||||||||||||||||||||*/
	@media only screen and (min-width: 992px) {
	    max-width: 960px;
	}

	/*|||||||||||||||||||||| Desktop(xl) ||||||||||||||||||||||*/
	@media only screen and (min-width: 1200px) {
	    max-width: 1140px;
	}
`

export default Container