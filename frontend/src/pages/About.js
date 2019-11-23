import React from "react";
import { Box } from "@rebass/grid";
import styled from "styled-components";
import { BigCallout, PageSection, SmallSection } from "../components";

// Images
import HatsOnShelves from "../assets/images/about/hats-on-shelves.jpg";
import DannyAinge from "../assets/images/about/danny-ainge.jpg";
import CactusChallenge from "../assets/images/about/chuck_dirk.png";
import ChildrensHospital from "../assets/images/about/childrens-hospital.jpg";
import BoysGirlsClub from "../assets/images/about/boys-and-girls.jpg";
import { HLogo } from "../components/Branding";

const Row = styled(SmallSection)`
  align-items: center;
  justify-content: center;
  display: flex;
`;

const AboutStyles = styled.div`
  h2 {
    font-size: 32px;
    margin: 0;
    /* font-family: "Maisonneue Bold"; */
  }

  p {
    line-height: 1.7;
    font-size: 18px;
  }

  img {
    display: block;
    position: relative;
    border-radius: 6px;
    margin: auto;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 20px 0px;
  }

  svg {
    display: block;
    margin: auto;
    fill: #cf3a3a;
    max-height: 200px;
  }

  .bg-red {
    background: #ee5050;
    color: #fff;
  }

  .bg-gray {
    color: #272727;
    background: #f4f4f7;
  }

  .bg-black {
    background: #24262b;
    color: #fff;
  }
`;
const About = () => {
  return (
    <AboutStyles>
      <PageSection className="bg-red">
        <div className="container">
          <Row>
            <BigCallout
              style={{
                background: "#ee5050",
                color: "#fff",
              }}
            >
              Our story so far.
            </BigCallout>
          </Row>
          <Row>
            <Box px={2} width={1 / 2}>
              <h2>The Begining.</h2>
              <p>
                Hat Club is the ORIGINAL membership based store of its type. Our
                first store opened in 1992, filling a small space previously
                used as a janitor’s closet in a Mesa, Arizona shopping mall. Hat
                Club is a young dynamic company with NBA star and veteran, Danny
                Ainge as the first investor.
              </p>
            </Box>
            <Box px={4} width={1 / 2}>
              <HLogo />
            </Box>
          </Row>
        </div>
      </PageSection>
      <PageSection className="bg-gray">
        <div className="container">
          <Row>
            <Box px={4} width={1 / 2}>
              <img alt="" src={HatsOnShelves} />
            </Box>
            <Box px={2} width={1 / 2}>
              <h2>Our Core</h2>
              <p>
                Hat Club stores are comprised of a vibrant mix of branded and
                licensed hats that project an athletic and cutting edge image
                which caters not only to the sports fan, but attracts a strong
                and diversified base of ages and lifestyles. Each location
                manages to carry over 1,500 different styles, with over 7,000
                hats merchandised wall to wall and floor to ceiling. The
                extraordinary assortment of our market tailored and custom
                designed hats sets the Hat Club apart from all other stores. Our
                wide variety of MLB, NCAA, NFL, NHL, NBA, fitted and adjustable
                style hats boasts brand names such as New Era, 47 Brand,
                Mitchell & Ness, Nike and as well as the newest addition of the
                Streetwear market with The Hundreds, 10 Deep, Fitted Hawaii, HUF
                and Undefeated, to name a few.
              </p>
            </Box>
          </Row>
          <Row>
            <Box px={2} width={1 / 2}>
              <h2>Our Bond</h2>
              <p>
                Hat Club has grown significantly since its inception.While
                playing for the Portland Trailblazers, Ainge opened several
                Northwest retail stores specializing in team - licensed
                merchandise.After being traded to the Phoenix Suns, Ainge formed
                the National Hat Club, opened his first hats - only store and
                began closing the Northwest shops.Through 1994 and 1995, the
                National Hat Club opened a total of seven stores in the Phoenix
                area and sales rose quickly.
              </p>
              <p>
                Paul and Stephen Stachel, long - time sports merchandise
                retailers, first met Ainge when he stopped in their shop to talk
                hats.The Stachels were then the proprietors of the Arizona
                Sports Club, a two - store company also specializing in team -
                licensed merchandise.A bond was formed and in 1996 the two
                companies came together to create the Hat Club.Ainge has since
                sold his ownership in Hat Club and today the company is
                continued to be owned and operated by the Stachels.Hat Club has
                since become one of the largest independent all - hat store
                companies in the U.S., with stores in multiple states and
                worldwide at HatClub.com.
              </p>
            </Box>
            <Box px={4} width={1 / 2}>
              <img alt="" src={DannyAinge} />
            </Box>
          </Row>
        </div>
      </PageSection>
      <PageSection className="bg-black">
        <div className="container">
          <Row>
            <Box
              px={4}
              style={{
                textAlign: "center",
              }}
              width={2 / 3}
            >
              <h2>Giving Back</h2>
              <p>
                The Hat Club has always made sure to be active in the
                communities of our businesses and our customers and has helped
                raise more than $500,000 over the years by organizing and
                sponsoring a number of charity programs.
              </p>
            </Box>
          </Row>
          <Row>
            <Box px={2} width={1 / 2}>
              <h2>The Hat Club Cactus Challenge</h2>
              <p>
                In past years, celebrity athletes such as Charles Barkely, Steve
                Nash, Gabrielle Reese, Phil Mickelson, and Steve Young have
                participated in our celebrity softball game and community event
                which benefited the Arizona Special Olympics.
              </p>
            </Box>
            <Box px={4} width={1 / 2}>
              <img alt="" src={CactusChallenge} />
            </Box>
          </Row>
          <Row>
            <Box px={4} width={1 / 2}>
              <img alt="" src={ChildrensHospital} />
            </Box>
            <Box px={2} width={1 / 2}>
              <h2>Phoenix Children’s Hospital</h2>
              <p>
                Hat Club has been an official sponsor of the Holiday Card
                Project benefiting the Children’s Cancer Center, funds a closet
                of toys for children , and raised monies through special store
                promotions and proceeds donations.
              </p>
            </Box>
          </Row>
          <Row>
            <Box px={2} width={1 / 2}>
              <h2>Boys & Girls Club</h2>
              <p>
                Starting in 2008, the Hat Club will team up with the Boys &
                Girls Club and begin donating water bottle sales proceeds to
                clubs throughout Arizona, California, and Texas.
              </p>
            </Box>
            <Box px={4} width={1 / 2}>
              <img alt="" src={BoysGirlsClub} />
            </Box>
          </Row>
        </div>
      </PageSection>
    </AboutStyles>
  );
};

export default About;
