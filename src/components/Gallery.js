import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    width: 40%;
    min-height: 700px;
    flex-shrink: 0;
    display: flex;
    justify-content: start;
    align-items: stretch;
    border-top-right-radius: 8rem;
    border-bottom-right-radius: 8rem;
    overflow: hidden;
    flex-wrap: wrap;
    background-color: rgba(0,0,0,0.2);
    box-shadow: 0px 0px 50px 0px rgba(0,0,0,0.1);
`
const Item = styled.div`
    width: 50%;
    max-height: 250px;
    flex-shrink: 0;

    & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const Gallery = ({ sport, format }) => {
    let iterations = [1,2,3,4,5,6,7,8];

    return (
        <Wrapper>
            { iterations.map(value => (
                <Item>
                    <img src={`/images/sports/${sport}/${value}.${format}`} alt={`${sport}-${value}`} />
                </Item>
            )) }
        </Wrapper>
    )
}

export default Gallery