import styled from "styled-components";
import { useEffect } from "react";
import gsap from "gsap";

const Flex = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const PageIntro = styled.div`
  height: 350px;
  width: 100%;
  margin-bottom: 60px;
`;

const TextContainer = styled.div`
  margin-top: 165px;
  width: 750px;
  margin-left: 4%;
  margin-bottom: 100px;
  display: inline-block;
  vertical-align: middle;
`;

const Title = styled.div`
  font-family: aktiv-grotesk-extended, sans-serif;
  font-weight: 700;
  font-size: 32px;
  color: white;
  text-transform: uppercase;
  text-align: left;
  display: block;
  position: relative;
  margin-bottom: 15px;
`;

const Copy = styled.div`
  font-family: aktiv-grotesk-extended, sans-serif;
  font-size: 18px;
  color: rgb(230, 230, 230);
  display: block;
  position: relative;
`;

const Icon = styled.div`
  width: 200px;
  float: right;
  padding-top: 140px;
  margin-right: 8%;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.06))
    drop-shadow(0 1px 1px rgba(0, 0, 0, 0.12));
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    margin-top: -20px;
    margin-bottom: 20px;
    filter: drop-shadow(0 14px 28px rgba(0, 0, 0, 0.07))
      drop-shadow(0 10px 10px rgba(0, 0, 0, 0.11));
  }
`;

const Divider = styled.div`
  width: 92%;
  margin-left: 4%;
  height: 1px;
  background-color: lightgray;
  margin-bottom: 30px;
  display: block;
  position: relative;
`;

export default function ProjectHead({ title, copy, icon }) {
  useEffect(() => {
    gsap.from(".intro", {
      duration: 0.5,
      y: 20,
      autoAlpha: 0,
      delay: 0.8,
      ease: "back.out(2)",
      force3D: true,
    });
  }, []);
  return (
    <Flex>
      <PageIntro className="intro">
        <div>
          <TextContainer>
            <Title>{title}</Title>
            <Copy>{copy}</Copy>
          </TextContainer>
          <Icon>{/** <img src={icon} />**/}</Icon>
        </div>
        <Divider></Divider>
      </PageIntro>
    </Flex>
  );
}
