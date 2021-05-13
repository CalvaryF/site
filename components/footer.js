import styled from "styled-components";
import Link from "next/link";

const FooterMain = styled.div`
  position: relative;
  margin-top: 100px;
  height: 270px;
  width: 100%;
  background-color: rgba(20, 20, 20);
  backdrop-filter: blur(1rem);
  color: white;
`;

const Links = styled.div`
  position: absolute;
  bottom: 20px;
  color: white;
  width: 100%;
  font-size: 15px;
  font-family: aktiv-grotesk-extended, serif;
`;

const ContactContainer = styled.div`
  margin-bottom: 40px;
  font-size: 22px;
  color: white;
  font-family: uniwars, sans-serif;
  font-weight: 200;
`;

const Contact = styled.div`
  margin-left: 30px;
  padding-top: 50px;
  font-weight: 200;
  line-height: 2;
`;

const Copyright = styled.div`
  margin-right: 30px;
  float: right;
  font-size: 15px;
  font-family: aktiv-grotesk-extended, serif;
  color: rgb(128, 128, 128);
`;

const LinkContainer = styled.div`
  margin-bottom: 0;
  margin-top: 0px;
`;

const FooterLink = styled.a`
  color: white;
  margin-left: 30px;

  &:hover {
    color: #a5a5a5;
  }
`;

const ContactButton = styled.div`
  margin-left: 30px;
  line-height: 2;
  background-color: rgb(20, 20, 20);
  margin-bottom: 0px;
  display: inline-block;
  padding-left: 12px;
  padding-right: 12px;
  border-width: 1px;
  border-style: solid;
  color: #ffffff;
  border-radius: 2px;
  transition: 0.2s ease;

  &:hover {
    color: rgb(30, 30, 30);
    background-color: white;
    border-width: 1px;
    border-style: solid;
    cursor: pointer;
    transition: 0.2s ease;
  }
`;

const Footer = () => {
  return (
    <FooterMain>
      <Links>
        <LinkContainer>
          <FooterLink href="/">Instagram </FooterLink>
          <FooterLink href="/">Linkedin </FooterLink>
          <FooterLink href="/">Twitter </FooterLink>
          <Copyright> &copy; Calvary Fisher 2021 </Copyright>
        </LinkContainer>
      </Links>
      <ContactContainer>
        <Contact> For business inquiries:</Contact>
        <Link href="/">
          <ContactButton>Email me &#8594;</ContactButton>
        </Link>{" "}
      </ContactContainer>
    </FooterMain>
  );
};

export default Footer;
