import styled from "styled-components";
import PageIntro from "../components/pageIntro";
import Card from "../components/card2";
import gsap from "gsap";
import Link from "next/link";
import React from "react";
import { useEffect } from "react";

const Main = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: rgb(120, 122, 125);
  background-image: radial-gradient(rgb(190, 190, 190) 1%, transparent 2%),
    radial-gradient(rgb(200, 200, 200) 1%, transparent 2%);
  background-size: 100px 100px;
  background-attachment: fixed;
  background-position: 0 0, 50px 50px;
  background-repeat: repeat;
`;

const Flex = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Cards = styled.div`
  margin-top: 140px;
  display: grid;
  justify-content: center;
  flex-wrap: wrap;
  width: 80%;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 4rem;
  margin-bottom: 70px;
`;

const Info = () => {
  useEffect(() => {
    gsap.from(".card", {
      duration: 0.5,
      y: 20,
      autoAlpha: 0,
      delay: 0.8,
      stagger: 0.1,
      ease: "back.out(2)",
      force3D: true,
    });
    gsap.from(".main", {
      backgroundColor: "rgb(20, 20, 20)",
      duration: 0.5,
      delay: 0.8,
    });
  }, []);

  return (
    <Main className="main">
      <PageIntro
        title="Hey There"
        copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        icon=""
      ></PageIntro>
      <Flex>
        <Cards>
          <Card
            path="/"
            title="@Calv"
            thumbnail="/images/a.png"
            logo="/images/logos/sysfic.svg"
            subhead={
              <>
                <p>art practice:</p>
                2021 -
              </>
            }
            description="Material futures speculation using systems thinking, simulation, philosophy, and design."
          ></Card>

          <Card
            path="/"
            title="-"
            thumbnail="/images/a.png"
            logo="/images/logos/fndr.svg"
            subhead={
              <>
                <p>client:</p>
                fndr
              </>
            }
            description="An interactive dashboard system for presenting multiple client brand narratives. Development and design."
          ></Card>
          <Card
            path="/work/sight"
            title="-"
            thumbnail="/images/a.png"
            logo="/images/logos/cf2.svg"
            subhead={
              <>
                <p> project:</p>
                art + code
              </>
            }
            description="A series of interactive illustrations exploring technology, politics, philosophy, and religion"
          ></Card>
        </Cards>
      </Flex>
    </Main>
  );
};

const MemoizedInfo = React.memo(Info);
export default MemoizedInfo;
