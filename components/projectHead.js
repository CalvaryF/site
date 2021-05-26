import styled from "styled-components";
import { useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";

const Main = styled.div`
  display: block;
  width: 92%;
  height: 480px;
  border-bottom: 1px solid lightgray;
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
  //background-color: blue;
`;

const Content = styled.div`
  position: absolute;
  margin-top: 150px;
  width: 1500px;
  //background-color: red;
`;

const Logo = styled.img`
  width: 270px;
  vertical-align: middle;
  margin-right: 55px;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.06))
    drop-shadow(0 1px 1px rgba(0, 0, 0, 0.12));
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border-radius: 2px;

  &:hover {
    margin-top: -20px;
    margin-bottom: 20px;
    filter: drop-shadow(0 14px 28px rgba(0, 0, 0, 0.17))
      drop-shadow(0 10px 10px rgba(0, 0, 0, 0.21));
  }
`;

const LogoAnimate = styled.div`
  position: relative;
  display: inline-block;
`;

const Title = styled.span`
  font-family: aktiv-grotesk-extended, serif;
  font-size: 32px;
  text-transform: uppercase;
  font-weight: 600;
`;

const Text = styled.span`
  font-family: aktiv-grotesk-extended, serif;
  font-size: 18px;
  color: rgb(210, 210, 210);
  position: relative;
`;

const Info = styled.div`
  display: block;
  width: 500px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const InfoText = styled.div`
  font-family: aktiv-grotesk-extended, sans-serif;
  font-weight: 400;
  color: rgb(230, 230, 230);
  text-transform: uppercase;
  display: inline-block;
  vertical-align: middle;
  font-size: 16px;
  letter-spacing: 2px;
`;

const InfoDivider = styled.div`
  display: inline-block;
  width: 2px;
  height: 25px;
  background-color: rgb(230, 230, 230);
  vertical-align: middle;
  margin-left: 6px;
  margin-right: 6px;
`;

const InfoDot = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 8px;
  vertical-align: middle;
  margin-left: 5px;
  background-color: rgb(230, 230, 230);
`;

const TextContainer = styled.div`
  display: inline-block;
  width: 750px;
  vertical-align: middle;
`;

const Divider = styled.div`
  position: absolute;
  right: 0px;
  height: 500px;
  width: 65px;
`;

const Vertical = styled.div`
  position: absolute;
  right: 6px;
  margin-top: 65px;
  display: none;
`;

const VerticalText = styled.div`
  position: absolute;
  font-family: aktiv-grotesk-extended, serif;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 400;
  left: 20px;
  margin-top: 78px;
  color: rgb(142, 142, 142);
  display: none;
`;

const Demo = styled.div`
  margin-top: 50px;
  button {
    background-color: #ffffff00;
    border: 1px solid white;
    padding: 12px 20px 12px 20px;
    font-weight: 200;
    font-family: uniwars, serif;
    font-size: 20px;
    color: white;
    transition: 0.2s ease;
    &:hover {
      background-color: white;
      color: rgb(120, 122, 125);
      transition: 0.2s ease;
      cursor: pointer;
    }
  }
`;

export default function ProjectHead({
  title,
  copy,
  logo,
  category,
  date,
  demo,
}) {
  useEffect(() => {
    gsap.from(".headItem", {
      duration: 0.5,
      y: 20,
      autoAlpha: 0,
      delay: 0.9,
      stagger: 0.1,
      ease: "back.out(2)",
      force3D: true,
    });
  }, []);

  return (
    <Main>
      <Content>
        <LogoAnimate className="headItem">
          <Logo src={logo} />
        </LogoAnimate>
        <TextContainer className="headItem">
          <Title>{title}</Title>
          <Info>
            <InfoText>{category}</InfoText>
            <InfoDivider></InfoDivider>
            <InfoText>{date}</InfoText>
            <InfoDivider></InfoDivider>
            <InfoDot></InfoDot>
          </Info>
          <Text>{copy}</Text>
          {demo ? (
            <Demo>
              <button>
                <Link href={demo}>View Demo &#8594;</Link>
              </button>
            </Demo>
          ) : (
            ""
          )}
        </TextContainer>
      </Content>
      <Divider className="headItem"></Divider>
    </Main>
  );
}
