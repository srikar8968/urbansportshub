import { animate, stagger } from "motion"
import React, { useEffect, useRef } from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    width: 100%;
    order: 1;
    min-height: 600px;
    flex-shrink: 0;
    display: flex;
    justify-content: start;
    align-items: stretch;
    overflow: hidden;
    flex-wrap: wrap;
    background-color: rgba(0,0,0,0.2);
    box-shadow: 0px 0px 50px 0px rgba(0,0,0,0.1);

    /*|||||||||||||||||||||| Mobile(sm) ||||||||||||||||||||||*/
	@media only screen and (min-width: 576px) {

	}

	/*|||||||||||||||||||||| Tablet(md) ||||||||||||||||||||||*/
	@media only screen and (min-width: 768px) {
        min-height: 800px;
	}

	/*|||||||||||||||||||||| Laptop(lg) ||||||||||||||||||||||*/
	@media only screen and (min-width: 992px) {
        width: 40%;
        border-top-right-radius: 8rem;
        border-bottom-right-radius: 8rem;
        min-height: 720px;
        order: 0;
	}

	/*|||||||||||||||||||||| Desktop(xl) ||||||||||||||||||||||*/
	@media only screen and (min-width: 1200px) {

	}
`
const Item = styled.div`
    width: 50%;
    height: 150px;
    flex-shrink: 0;
    opacity: 0;

    & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    /*|||||||||||||||||||||| Mobile(sm) ||||||||||||||||||||||*/
	@media only screen and (min-width: 576px) {

	}

	/*|||||||||||||||||||||| Tablet(md) ||||||||||||||||||||||*/
	@media only screen and (min-width: 768px) {
        height: 200px;
	}

	/*|||||||||||||||||||||| Laptop(lg) ||||||||||||||||||||||*/
	@media only screen and (min-width: 992px) {
        height: 180px;
	}

	/*|||||||||||||||||||||| Desktop(xl) ||||||||||||||||||||||*/
	@media only screen and (min-width: 1200px) {

	}
`

const Gallery = ({ sport, format }) => {
    let iterations = [1,2,3,4,5,6,7,8];
    const itemsRef = useRef([]);

    useEffect(() => {
        animate(itemsRef.current, { scale: [0.5, 1], opacity: [0,1] }, { delay: stagger(0.2) })
    }, [])

    return (
        <Wrapper>
            { iterations.map((value, index) => (
                <Item key={index} ref={el => itemsRef.current[index] = el}>
                    <img src={`/images/sports/${sport}/${value}.${format}`} alt={`${sport}-${value}`} />
                </Item>
            )) }
        </Wrapper>
    )
}

export default Gallery