import React from "react";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import Image from "reusecore/Image";
import { List, ListItem } from "reusecore/List";
import Subscribe from "sections/Subscribe";

import data from "assets/data/footer";
import FooterWrapper from "./footer.style";

const Footer = () => {
  return (
    <FooterWrapper>
      <Box className="footer-content-wrapper">
        <Subscribe />
        <Container>
          <Row>
            <Col className="lg-3 sm-6">
              <Box className="footer-widgets company-desc">
	  	<div style={ { 'font-size': '30px', color: 'white' } }>WTCH</div>
	  	<br />
                <Text>
	  		Real value in collections and trade
                </Text>

                <Box className="contact-info">
                  <Link href="#">
                    <a>
                      {" "}
                      <FaPhoneAlt /> info@wtch.finance{" "}
                    </a>
                  </Link>
                  <Link href="#">
                    <a>
                      {" "}
                      <FaEnvelope /> +1 307.735.3900{" "}
                    </a>
                  </Link>
                </Box>
              </Box>
            </Col>
            <Col className="lg-3 sm-6">
            </Col>
            <Col className="lg-3 sm-6">
              <Box className="footer-widgets">
                <Heading as="h2">About Us</Heading>
                <List>
                  <ListItem>
                    <Link href="#">
                      <a>About Us</a>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">
                      <a>Team</a>
                    </Link>
                  </ListItem>
                </List>
              </Box>
            </Col>
            <Col className="lg-3 sm-6">
              <Box className="footer-widgets address">
                <Heading as="h2">Our Address</Heading>
                <Text>
                  1500 Street Road, City, State
                </Text>
              </Box>
            </Col>
          </Row>
          <Row>
            <Col className="xs-12">
              <Box className="footer-social-links">
                {data.links.map((item, index) => (
                  <Link href={item.url} key={index}>
                    <a> {item.icon} </a>
                  </Link>
                ))}
              </Box>

              <Box className="copyright-text">
                <Text>&copy; 2021 The WTCH Group | All right reserved</Text>
                <Text as="span">
                </Text>
              </Box>
            </Col>
          </Row>
        </Container>
      </Box>
    </FooterWrapper>
  );
};

export default Footer;
