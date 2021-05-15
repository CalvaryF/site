import styled from "styled-components";
import Link from "next/link";

const FooterMain = styled.div`
  border-top: 1px solid #eee;
  position: relative;
  margin-top: 100px;
  height: 270px;
  width: 100%;
  background-color: rgb(80, 81, 85);
  background-color: rgba(20, 20, 20);
  //filter: brightness(1.08);
  // box-shadow: 0 24px 48px rgba(0, 0, 0, 0.45), 0 20px 20px rgba(0, 0, 0, 0.82);
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
  color: white;
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
  //background-color: rgb(20, 20, 20);
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
    color: rgb(80, 81, 85);
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
          <FooterLink href="/">Medium </FooterLink>
          <FooterLink href="/">Linkedin </FooterLink>
          <FooterLink href="/">Twitter </FooterLink>
          <FooterLink href="/">Tik Tox </FooterLink>
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
