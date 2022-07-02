import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import Modal from 'react-modal';
import { Helmet } from "react-helmet";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import HeroContainer from '../components/HeroContainer';

Modal.setAppElement('#root');

const customStyles = {
  	content: {
    	border: '1px solid #ddd',
    	inset: '20px',
    	padding: '0',
    	bottom: 'auto'
  	},
};

const Wrapper = styled(HeroContainer)`
	padding-top: 140px;
	background-color: #297349;

	& .ReactModal__Content img {
		width: 100%;
	}

	& .slider-wrapper > .slider > .slide {
		padding: 2rem 0;
		transition: padding 0.3s linear;
	}
	& .slider-wrapper > .slider > .slide.selected {
		border-radius: 1rem;
		overflow: hidden;
		padding: 0;
	}
	& .slider-wrapper > .slider > .slide > div {
		position: relative;
	}
	& .slider-wrapper > .slider > .slide > div::after {
		content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(16, 76, 56, 0.75);
		transition: all 0.2s linear;
	}
	& .slider-wrapper > .slider > .slide.selected > div::after {
		background-color: rgba(16, 76, 56, 0);
	}
`
const CloseBtn = styled.button`
	position: absolute;
	top: 0;
	right: 0;
	background-color: #fff;
	border-bottom-left-radius: 4px;
	& svg {
		width: 24px;
		height: 24px;
	}
`
const getConfigurableProps = () => ({
    showArrows: true,
    showStatus: true,
    showIndicators: true,
    infiniteLoop: true,
    showThumbs: true,
    useKeyboardArrows: true,
    stopOnHover: true,
    swipeable: true,
    dynamicHeight: true,
    emulateTouch: true,
    autoFocus: false,
    interval: 6000,
    transitionTime: 500
});

const Gallery = () => {
	const images = ['shoot1', 'shoot2', 'shoot3', 'shoot4', 'shoot5', 'shoot6', 'shoot7', 'shoot8', 'shoot9', 'shoot10', 'shoot11']
	const [currentItem, setCurrentItem] = useState(0);
	const [modalIsOpen, setIsOpen] = useState(false);

	const onClickImage = () => setIsOpen(true);
	const onItemChange = item => setCurrentItem(item);
	const closeModal = () => setIsOpen(false);

	return (
		<>
			<Helmet>
                <title>Gallery - Urban Sports Hub</title>
                <meta property="og:title" content="Contact Us - Urban Sports Hub" />
                <meta name="twitter:title" content="Contact Us - Urban Sports Hub" />
            </Helmet>

            <Wrapper>
		        <Carousel 
		        	infiniteLoop
			        centerMode
			        centerSlidePercentage={80} 
			        onClickItem={onClickImage}
			        onChange={onItemChange}
			        autoPlay={!modalIsOpen}
		        	{...getConfigurableProps()} >
		    	{ images.map((item, index) => (
		    		<div 
		    			key={item} >
		    			<img src={`/images/gallery/${item}.JPG`} alt={`Gallery shot ${++index}`} />
		    		</div>
				)) }
				</Carousel>

				<Modal
			        isOpen={modalIsOpen}
			        onRequestClose={closeModal}
			        style={customStyles}
			        contentLabel="Example Modal">
			        <CloseBtn onClick={closeModal}>
			        	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line></svg>
			        </CloseBtn>
			        <img src={`/images/gallery/${images[currentItem]}.JPG`} alt={`Gallery shot ${currentItem+1}`} />
		      	</Modal>
            </Wrapper>
		</>
	)
}

export default Gallery