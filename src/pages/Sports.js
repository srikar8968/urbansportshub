import React from "react";
import styled from "styled-components";
import SportsGallery from "../components/SportsGallery";
import membership from "../membership";
import { Helmet } from "react-helmet";

const Wrapper = styled.div`
`

const Sports = () => {
    return (
        <Wrapper>
            <Helmet>
                <title>Sports - Urban Sports Hub</title>
                <meta property="og:title" content="Sports - Urban Sports Hub" />
                <meta name="twitter:title" content="Sports - Urban Sports Hub" />
            </Helmet>
            
            <SportsGallery membership={membership} />
        </Wrapper>   
    )
}

export default Sports