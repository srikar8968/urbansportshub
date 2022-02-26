import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const FacilityWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    flex-wrap: wrap;
    color: #ddd;
    text-align: center;
`
const FacilitySection = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({lastchild}) => lastchild ? '100%' : '50%'};
    min-height: ${({lastchild}) => lastchild ? 'auto' : '390px'};;
    position: relative;
    padding: 4rem;
    background-image: url(${({bgimage}) => '/images/' + bgimage});
    background-size: cover;
    background-repeat: no-repeat;

    & > div.faciltyInner {
        position: relative;
    }

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(16, 76, 56, 0.75);
        // backdrop-filter: blur(2px);
    }

    &:hover::before {
        background-color: rgba(16, 76, 56, 0.5);
    }
    &:hover div.faciltyInner p {
        color: #ddd;
    }

    & > div.faciltyInner > p {
        font-size: 1.25rem;
    }
`
const SectionTitle = styled.h2`
    font-size: 4.5rem;
    font-weight: 200;
    color: #fff;
`

const SportsGallery = ({ membership }) => {
    return (
        <FacilityWrapper>
        { membership.map((facility, index) => (
            <FacilitySection 
                to={`/sports/${facility.name.toLowerCase()}`}
                key={facility.name} 
                lastchild={ (membership.length === index+1) ? true : false } 
                bgimage={facility.image}>
                <div className="faciltyInner">
                    <SectionTitle>{ facility.name }</SectionTitle>
                    <p>{ facility.description }</p>
                </div>
            </FacilitySection>
        )) }
        </FacilityWrapper>
    )
}

export default SportsGallery