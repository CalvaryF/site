import styled from "styled-components";
import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/card";
import gsap from "gsap";
import { useEffect } from "react";

const Main = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: rgb(50, 50, 50);
  background-image: radial-gradient(rgb(90, 90, 90) 1%, transparent 2%),
    radial-gradient(rgb(90, 90, 90) 1%, transparent 2%);
  background-size: 100px 100px;
  background-attachment: fixed;
  background-position: 0 0, 50px 50px;
  background-repeat: repeat;
`;

const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Cards = styled.div`
  margin-top: 120px;
  display: grid;
  justify-content: center;
  flex-wrap: wrap;
  width: 80%;
  grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
  grid-gap: 4rem;
  margin-bottom: 70px;
`;

export default function Home() {
  useEffect(() => {
    gsap.from(".card", {
      duration: 0.5,
      y: 20,
      autoAlpha: 0,
      delay: 0.5,
      stagger: 0.1,
      ease: "back.out(2)",
      force3D: true,
    });
  }, []);

  return (
    <Main>
      <Header></Header>
      <Flex>
        <Cards>
          <Card
            path="/"
            title="Systems Fiction"
            thumbnail="/images/a.png"
          ></Card>
          <Card
            path="/"
            title="Story On a page"
            thumbnail="/images/illo2.png"
          ></Card>
          <Card path="/" title="Sight" thumbnail="/images/sight.png"></Card>
          <Card path="/" title="EP Fast" thumbnail="/images/ep.png"></Card>
          <Card
            path="/"
            title="Merlin Bird ID"
            thumbnail="/images/bird.png"
          ></Card>

          <Card
            path="/"
            title="Allonnia"
            thumbnail="/images/allonnia.png"
          ></Card>
          <Card path="/" title="Neuehouse" thumbnail="/images/neue.png"></Card>
          <Card path="/" title="Cursor" thumbnail="/images/cursor.png"></Card>
          <Card
            path="/"
            title="Sublime Meme"
            thumbnail="/images/yes copy.png"
          ></Card>
        </Cards>
        <Footer></Footer>
      </Flex>
    </Main>
  );
}
