import styled from "styled-components";
import Header from "../components/header";
import Card from "../components/card";

const Main = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: rgb(50, 50, 50);
  background-image: radial-gradient(rgb(35, 35, 35) 3%, transparent 4%),
    radial-gradient(rgb(35, 35, 35) 3%, transparent 4%);
  background-size: 60px 60px;
  background-position: 0 0, 30px 30px;
  background-repeat: repeat;
`;

const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
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
  return (
    <Main>
      <Header></Header>
      <Flex>
        <Cards>
          <Card
            path="/"
            title="Systems Fiction"
            thumbnail="/images/7.jpg"
          ></Card>
          <Card
            path="/"
            title="Story On a page"
            thumbnail="/images/illo.png"
          ></Card>
          <Card path="/" title="Sight" thumbnail="/images/sight.png"></Card>
          <Card
            path="/"
            title="Merlin Bird ID"
            thumbnail="/images/bird.png"
          ></Card>
          <Card path="/" title="EP Fast" thumbnail="/images/ep.png"></Card>
          <Card
            path="/"
            title="Allonnia"
            thumbnail="/images/reaction.png"
          ></Card>
          <Card
            path="/"
            title="Neuehouse"
            thumbnail="/images/neuehouse.png"
          ></Card>
          <Card
            path="/"
            title="Sublime Meme"
            thumbnail="/images/yes.png"
          ></Card>
          <Card path="/" title="Cursor" thumbnail="/images/cursor.png"></Card>
        </Cards>
      </Flex>
    </Main>
  );
}
