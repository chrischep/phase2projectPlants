import React from 'react'

import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
  } from "./FooterStyles";
    
  const Footer = () => {
    return (
      <Box>
        <h1 style={{ color: "green", 
                     textAlign: "center", 
                     marginTop: "-50px" }}>
         Blossom-Plant Identification
        </h1>
        <Container>
          <Row>
            <Column>
              <Heading>About Us</Heading>
              <FooterLink href="#">Aim</FooterLink>
              <FooterLink href="#">Vision</FooterLink>
    
            </Column>
            <Column>
              <Heading>Services</Heading>
              <FooterLink href="#">Plant care</FooterLink>
              <FooterLink href="#">plant family</FooterLink>

            </Column>
            <Column>
              <Heading>Contact Us</Heading>
              <FooterLink href="#">071234565</FooterLink>
              <FooterLink href="#">0798765432</FooterLink>

            </Column>
            <Column>
              <Heading>Social Media</Heading>
              <FooterLink href="#">
                <i className="fab fa-facebook-f">
                  <span style={{ marginLeft: "10px" }}>
                    Facebook
                  </span>
                </i>
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-instagram">
                  <span style={{ marginLeft: "10px" }}>
                    Instagram
                  </span>
                </i>
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-twitter">
                  <span style={{ marginLeft: "10px" }}>
                    Twitter
                  </span>
                </i>
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-youtube">
                  <span style={{ marginLeft: "10px" }}>
                    Youtube
                  </span>
                </i>
              </FooterLink>
            </Column>
          </Row>
        </Container>
      </Box>
    );
  };

export default Footer