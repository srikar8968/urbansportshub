import { useState } from "react"
import styled from "styled-components"
import Container from "../components/Container"
import membership from "../membership"
import { Helmet } from "react-helmet";

const MembershipWrapper = styled.div`
    padding: 40px 0;
    font-size: 1.125rem;
    & ul {
		list-style: disc;
		padding: 8px 0 0 32px;
	}
`

const MembershipHeaderSection = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 5rem;
	& > img {
		min-height: 280px;
		width: 420px;
        flex-shrink: 0;
		max-width: 100%;
		margin-left: 2rem;
		border-radius: 19% 81% 70% 30% / 36% 34% 66% 64% ;
		background-color: #ddd;
	}
`
const MembershipHeader = styled.h1`
	font-size: 4rem;
	color: #2e2e2e;
	line-height: 1.2;
    margin-bottom: 1rem;
`
const MembershipSubHeader = styled.h2`
	font-size: 1.25rem;
	font-weight: 600;
	color: #bbb;
	letter-spacing: 5px;
`
const MembershipBox = styled.div`
    padding: 4rem 0;
`
const MembershipTabs = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: space-between
`
const MembershipTab = styled.button`
    width: 100%;
    padding: 1rem .75rem;
    border-bottom: 2px solid ${({active}) => active ? 'var(--primary)' : '#ddd'};
    font-weight: 600;
    color: ${({active}) => active ? '#828282' : '#0a0a0e'};
    background-color: ${({active}) => active ? 'rgba(47, 239, 173, 0.2)' : 'none'};
    &:hover {
        background-color: rgba(0,0,0,0.05);
    }
`
const MembershipPlanBox = styled.div`
    display: flex;
`
const MembershipPlanTable = styled.table`
    width: 100%;
    text-align: center;
    margin-top: .5rem;
    border: 1px solid #ddd;

    & th {
        padding: .75rem 0;
        font-weight: 600;
        font-size: 0.75rem;
        border-bottom: 1px solid #ddd;
        background-color: rgba(0,0,0, 0.025)
    }

    & tr+tr {
        border-top: 1px solid #ddd
    }
    & tbody > tr:hover {
        background-color: rgba(0,0,0, 0.015)
    }
    & tbody > tr > td {
        padding: 1rem;
    }
    & .plan, & th:first-child {
        width: 180px;
        background-color: rgba(47, 239, 173, 0.2);
        border-right: 1px solid #ddd;
    }
`

const Membership = () => {
    const [activeMembership, setActiveMembership] = useState(0);

    return (
        <MembershipWrapper>
            <Helmet>
                <title>Memberships - Urban Sports Hub</title>
                <meta property="og:title" content="Memberships - Urban Sports Hub" />
                <meta name="twitter:title" content="Memberships - Urban Sports Hub" />
            </Helmet>

            <Container>
                <MembershipHeaderSection>
					<div>
						<MembershipSubHeader>Sport-Centric Memberships</MembershipSubHeader>
						<MembershipHeader>Come, find and grab the memberships at our venture</MembershipHeader>
                        <a href="#priceList">: : : :&nbsp;&nbsp;<small>View Membership Plans</small></a>
					</div>
					<img src="/images/pages/membership.jpg" alt="about-us" />
				</MembershipHeaderSection>
                <div>
                    <div>Are you aware of the sports we provide? Do you love them? You are aware of the benefits? You have made yourself to get fit? Then why wait? Come, find and grab the memberships at our venture with most reasonable prices according to your choice of sport. We have a conviction that “You don’t have to be great to start, but you have to start to be great!” If the thought of new sporting routine excites you, implementing the regime is much more fun and exciting. So look no further and get started now.
                    <br/><br/>
                    We also provide memberships for services in different periods, levels and combinations too. Ask for our quarterly, half yearly and annual memberships for extra benefits because “Fitness is not a destination, it’s a way of life” and “The consistency is what transforms an average into excellence!”
                    <br/><br/>
                    Not interested to enter alone? Worrying about your partner or family member’s health? Get yourselves here. Make an extended community including your people. The scientists say the heart is much happier when you sweat, upon this with your own people around, definitely a perfect blend!
                    <br/><br/>
                    Not aware of the benefits associated with group workout? No issues get your eyeballs keenly down here:
                    <ul>
                        <li>Increase your commitment to a fitness routine</li>
                        <li>Get a competitive edge</li>
                        <li>Increases happiness in your relationship</li>
                        <li>Pushing yourself harder than before</li>
                        <li>Get external motivation when you’re dragging</li>
                        <li>Find support & accountability in being part of a team</li>
                        <li>Above all, much time with your mates. Oh man that’s a boon for you, isn’t it?</li>
                    </ul>
                    <br/>
                    Now think, aren’t they wonderful? You are definitely concerned about your dear ones, isn’t it? So push yourselves and your dearest with love & excitement and you know what, you will be rewarded for this!</div>
                </div>

                <MembershipBox id="priceList">
                    <MembershipTabs>
                        { membership?.map((membershipItem, index) => (
                            <MembershipTab 
                                active={activeMembership === index} 
                                onClick={() => setActiveMembership(index)} 
                                key={index}>
                                    { membershipItem.name }
                            </MembershipTab>
                        )) }
                    </MembershipTabs>
                    
                    <MembershipPlanBox>
                        <MembershipPlanTable>
                            <thead>
                                <tr>
                                    <th>PLANS</th>
                                    <th>MONTHLY</th>
                                    <th>QUARTERLY</th>
                                    <th>HALF YEARLY</th>
                                    <th>ANNUAL</th>
                                </tr>
                            </thead>
                            <tbody>
                                { membership[activeMembership]?.plans?.map((planItem, index) => (
                                    <tr key={index}>
                                        <td className="plan">{ planItem?.name }</td>

                                        <td>{ planItem?.price?.monthly } USD</td>
                                        <td>{ planItem?.price?.quarterly } USD</td>
                                        <td>{ planItem?.price?.halfYearly } USD</td>
                                        <td>{ planItem?.price?.annual } USD</td>
                                    </tr>
                                )) }
                            </tbody>
                        </MembershipPlanTable>
                    </MembershipPlanBox>
                </MembershipBox>
            </Container>
        </MembershipWrapper>
    )
}

export default Membership