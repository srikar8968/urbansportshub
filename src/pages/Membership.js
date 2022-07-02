import { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import Container from "../components/Container"
import membership, { fullClub, memberSports } from "../membership"
import { Helmet } from "react-helmet";
import { animate, stagger, timeline } from "motion";

const MembershipWrapper = styled.div`
    padding: 20px 0;
    font-size: 1.125rem;
    & ul {
		list-style: disc;
		padding: 8px 0 0 32px;
	}
    
    /*|||||||||||||||||||||| Laptop(lg) ||||||||||||||||||||||*/
    @media only screen and (min-width: 992px) {
        padding: 40px 0;
    }
`
const MembershipHeaderSection = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    & > img {
        display: none;
        width: 320px;
        min-height: 213px;
        flex-shrink: 0;
        max-width: 100%;
        margin-left: 2rem;
        border-radius: 19% 81% 70% 30% / 36% 34% 66% 64% ;
        background-color: #ddd;
        // box-shadow: 0px 0px 20px 2px #ddd;
        opacity: 0;
    }

    /*|||||||||||||||||||||| Laptop(lg) ||||||||||||||||||||||*/
    @media only screen and (min-width: 992px) {
        margin-bottom: 5rem;
        
        & > img {
            display: block;
        }
    }
    /*|||||||||||||||||||||| Desktop(xl) ||||||||||||||||||||||*/
    @media only screen and (min-width: 1200px) {
        & > img {
            width: 420px;
            min-height: 280px;
        }
    }
`
const MembershipHeader = styled.h1`
    font-size: 2rem;
    color: #2e2e2e;
    line-height: 1.2;
    opacity: 0;
    margin-bottom: .5rem;

    /*|||||||||||||||||||||| Laptop(lg) ||||||||||||||||||||||*/
    @media only screen and (min-width: 992px) {
        font-size: 4rem;
        margin-bottom: 1rem;
    }
`
const MembershipSubHeader = styled.h2`
	font-size: 1rem;
	font-weight: 600;
	color: #bbb;
	letter-spacing: 5px;

    /*|||||||||||||||||||||| Laptop(lg) ||||||||||||||||||||||*/
    @media only screen and (min-width: 992px) {
        font-size: 1.25rem;
    }
`
const MembershipBox = styled.div`
    padding: 4rem 0;
    overflow: hidden;
`
const MembershipTabs = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: start
`
const MembershipTab = styled.button`
    width: 50%;
    padding: 1rem;
    border-bottom: 2px solid ${({active}) => active ? 'var(--primary)' : '#ddd'};
    font-weight: 600;
    color: ${({active}) => active ? '#828282' : '#0a0a0e'};
    background-color: ${({active}) => active ? 'rgba(47, 239, 173, 0.2)' : 'none'};
    &:hover {
        background-color: rgba(0,0,0,0.05);
    }

    /*|||||||||||||||||||||| Tablet(md) ||||||||||||||||||||||*/
	@media only screen and (min-width: 768px) {
        width: 33.333%;
	}
    
    /*|||||||||||||||||||||| Laptop(lg) ||||||||||||||||||||||*/
    @media only screen and (min-width: 992px) {
        width: 20%;
    }
`
const MembershipPlanBox = styled.div`
    display: flex;
    max-width: 100%;
    overflow-x: scroll;
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
        white-space: nowrap;
    }
    & .plan, & th:first-child {
        width: 180px;
        background-color: rgba(47, 239, 173, 0.2);
        border-right: 1px solid #ddd;
        white-space: pre;
    }

    & tbody.comboPrices > tr:nth-child(4),
    tbody.comboPrices > tr:nth-child(5),
    tbody.comboPrices > tr:nth-child(6) {
        background-color: #ffffd3;
        border-top: 1px solid #e9e98d;
    }

    & tbody.comboPrices > tr:nth-child(4) .plan,
    tbody.comboPrices > tr:nth-child(5) .plan,
    tbody.comboPrices > tr:nth-child(6) .plan {
        background-color: #f3f3b1;
    }

    & tbody.comboPrices > tr:last-child .plan {
        background-color: #f1f199;
    }

    & tbody.comboPrices > tr:last-child {
        background-color: #f3f3b1;
        border-top: 1px solid #e9e98d;
    }
`

const Membership = () => {
    const [activeMembership, setActiveMembership] = useState(0);
    const titleRef = useRef([]);
	const contentRef = useRef(null);
	const imgRef = useRef(null);
	const membershipRef = useRef(null);

	useEffect(() => {
		const sequence = [
			[titleRef.current, { x : [-150, 0], opacity: [0, 1] }, { delay: stagger(0.2) }],
			[imgRef.current, { scale: [0.75, 1], opacity: [0, 1] }],
			[contentRef.current, { opacity: [0, 1] }]
		]
		timeline(sequence, { defaultOptions: { duration: 0.5 } });
	}, [])

    useEffect(() => {
        const sequence = [
            [membershipRef.current, { x: [0, -100], opacity: [1, 0] }],
            [membershipRef.current, { x: [100, 0], opacity: [0, 1] }]
        ];
        timeline(sequence, { defaultOptions: { duration: 0.2 } });
    }, [activeMembership])

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
						<MembershipSubHeader ref={el => titleRef.current[0] = el}>Sport-Centric Memberships</MembershipSubHeader>
						<MembershipHeader ref={el => titleRef.current[1] = el}>Come, find and grab the memberships at our venture</MembershipHeader>
                        <a href="#priceList">: : : :&nbsp;&nbsp;<small>View Membership Plans</small></a>
					</div>
					<img ref={imgRef} src="/images/pages/membership.jpg" alt="about-us" />
				</MembershipHeaderSection>
                <div ref={contentRef}>
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
                        <MembershipTab style={{ width: '100%' }} active={false}>{ fullClub.name }</MembershipTab>
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
                                { fullClub?.plans?.map((planItem, index) => (
                                    <tr key={index}>
                                        <td className="plan">{ planItem?.name }</td>

                                        <PriceShowCase planItem={planItem} />
                                    </tr>
                                )) }
                            </tbody>
                        </MembershipPlanTable>
                    </MembershipPlanBox>
                    <br/>
                    
                    {/*<MembershipTabs>
                        { membership?.map((membershipItem, index) => (
                            <MembershipTab 
                                active={activeMembership === index} 
                                onClick={() => setActiveMembership(index)} 
                                key={index}>
                                    { membershipItem.name }
                            </MembershipTab>
                        )) }
                    </MembershipTabs>*/}
                    <MembershipTabs>
                        <MembershipTab style={{ width: '100%' }} active={false}>Individual Sports Membership</MembershipTab>
                    </MembershipTabs>
                    
                    <MembershipPlanBox ref={membershipRef}>
                        <MembershipPlanTable>
                            <thead>
                                <tr>
                                    <th>ACTIVITY</th>
                                    <th>MONTHLY</th>
                                    <th>QUARTERLY</th>
                                    <th>HALF YEARLY</th>
                                    <th>ANNUAL</th>
                                </tr>
                            </thead>
                            <tbody className="comboPrices">
                                { membership?.map((membershipItem, index) => (
                                    <>
                                        { !membershipItem?.hourly && 
                                            <tr key={index}>
                                                <td className="plan">{membershipItem?.name}</td>

                                                <PriceShowCase planItem={membershipItem?.plans[0]} />
                                            </tr>
                                        }
                                    </>
                                )) }
                            </tbody>
                        </MembershipPlanTable>
                    </MembershipPlanBox>
                    <br/>
                    <MembershipTabs>
                        <MembershipTab style={{ width: '100%' }} active={false}>{ memberSports.name }</MembershipTab>
                    </MembershipTabs>
                    <MembershipPlanBox>
                        <MembershipPlanTable>
                            <thead>
                                <tr>
                                    <th>ACTIVITY</th>
                                    <th>HOURLY PRICE</th>
                                </tr>
                            </thead>
                            <tbody>
                                { memberSports?.games?.map((planItem, index) => (
                                    <tr key={index}>
                                        <td className="plan">{ planItem?.name }</td>
                                        <td>&#8377; { planItem?.price.toLocaleString(undefined, { minimumFractionDigits: 2 }) }/hr</td>
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

const PriceShowCase = ({planItem}) => {
    const toCurrencyFormat = (price) => {
        return (price).toLocaleString(undefined, { minimumFractionDigits: 2 });
    }

    return (
        <>
            <td>&#8377; { toCurrencyFormat(planItem?.price?.monthly) }</td>
            <td>&#8377; { toCurrencyFormat(planItem?.price?.quarterly) }</td>
            <td>&#8377; { toCurrencyFormat(planItem?.price?.halfYearly) } <br/><small>(1 month free)</small></td>
            <td>&#8377; { toCurrencyFormat(planItem?.price?.annual) } <br/><small>(2 months free)</small></td>
        </>
    )
}

export default Membership