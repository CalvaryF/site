import styled from "styled-components";
import PageIntro from "../components/pageIntro";
import Card from "../components/card";
import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import gsap from "gsap";

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
  margin-bottom: 130px;
`;

const Home = () => {
  useEffect(() => {
    gsap.from(".card", {
      duration: 0.5,
      y: 20,
      autoAlpha: 0,
      delay: 0.9,
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
        title="My Work"
        copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        icon=""
      ></PageIntro>
      <Flex>
        <Cards>
          <Card
            path="/work/sysfic"
            title="Systems Fiction"
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
            path="/work/story"
            title="Story On a page"
            thumbnail="/images/illo2.png"
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
            title="Sight"
            thumbnail="/images/sight.png"
            logo="/images/logos/cf2.svg"
            subhead={
              <>
                <p> project:</p>
                art + code
              </>
            }
            description="A series of interactive illustrations exploring technology, politics, philosophy, and religion"
          ></Card>
          <Card
            path="/work/epfast"
            title="EP Fast"
            thumbnail="/images/ep.png"
            logo="/images/logos/anl.png"
            subhead={
              <>
                <p> client: </p>
                Argonne national laboratory
              </>
            }
            description="A data dashboard visualizing power grid infrastructure in disaster scenarios. UI, UX and Dataviz design."
          ></Card>
          <Card
            path="/work/merlin"
            title="Merlin Bird ID"
            thumbnail="/images/bird.png"
            logo="/images/logos/merlin.png"
            subhead={
              <>
                <p> project: </p>
                app redesign
              </>
            }
            description="Cleaning up the UI/UX for the Cornell Lab's set of birdwatching apps."
          ></Card>
          <Card
            path="/work/allonnia"
            title="Allonnia"
            thumbnail="/images/allonnia.png"
            logo="/images/logos/ginkgo.svg"
            subhead={
              <>
                <p> client:</p>
                Allonnia
              </>
            }
            description="Logo and brand strategy for Ginkgo Bioworks child company Allonnia - The Waste Performance Company."
          ></Card>
          <Card
            path="/work/meme"
            title="Sublime Meme"
            thumbnail="/images/yes copy.png"
            logo="/images/logos/meme.png"
            subhead={
              <>
                <p> project:</p>
                animated film
              </>
            }
            description="A short film exploring the relationship between images and the sublime"
          ></Card>
          <Card
            path="/work/neuehouse"
            title="Neuehouse"
            thumbnail="/images/neue.png"
            logo="/images/logos/neuelogo.png"
            subhead={
              <>
                <p>client:</p>
                neuehouse
              </>
            }
            description="A series of illustrations for the Neuehouse newsletter"
          ></Card>
          <Card
            path="/work/cursor"
            title="Cursor"
            thumbnail="/images/cursor.png"
            logo="/images/logos/cursor.png"
            subhead={
              <>
                <p> project:</p>
                animated film
              </>
            }
            description="A shot film exploring the connection between interfaces and the body"
          ></Card>
        </Cards>
      </Flex>
    </Main>
  );
};

const MemoizedHome = React.memo(Home);
export default MemoizedHome;
