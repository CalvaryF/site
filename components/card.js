import styled from "styled-components";
import Link from "next/link";

const CardHead = styled.div`
  background-color: rgb(20, 20, 20);
  width: 100%;
  height: 48px;
  text-transform: uppercase;
  letter-spacing: 0.7px;
  border-radius: 5px 5px 0 0;
  position: relative;
`;

const CardDiv = styled.div`
  background-color: rgb(30, 30, 30);
  height: 600px;
  width: 400px;
  margin: 0px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: inline-block;
  place-self: center;
  //border: 1px solid #555;
  border-radius: 5px;

  &:hover {
    margin-top: -15px;
    margin-bottom: 15px;
    box-shadow: 0 24px 48px rgba(0, 0, 0, 0.45), 0 20px 20px rgba(0, 0, 0, 0.82);
    cursor: pointer;
    //border: 1px solid #ccc;

    div {
      &.dot {
        background-color: #fff;
        background-color: #85d1ff;
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        transform: scale(1.1);
      }

      &.cardInfo {
        opacity: 0.9;
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
      }
    }
  }
`;

const CardTitle = styled.span`
  color: white;
  display: inline-block;
  font-family: aktiv-grotesk-extended, serif;
  font-weight: 500;
  font-style: normal;
  font-size: 20px;
  padding-top: 11px;
  padding-left: 20px;
`;

const Dot = styled.div`
  background-color: #888;
  height: 20px;
  width: 20px;
  border-radius: 10px;
  margin: 14px;
  float: right;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  border-radius: 0 0 5px 5px;
`;

const CardInfo = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 0 0 5px 5px;
  background-color: rgb(30, 30, 30);
  opacity: 0;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(17, 1fr);
`;

const Logo = styled.div`
  grid-row: 1/5;
  grid-column: 1/2;
  //background-color: tomato;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  border-right: 1px solid #fff;
  padding: 20px;
  img {
    width: 100%;
  }
`;

const Subhead = styled.div`
  grid-row: 1/5;
  grid-column: 2/4;
  //background-color: crimson;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  padding: 20px;
  span {
    font-family: aktiv-grotesk-extended, serif;
    color: white;
    font-weight: 500;
    font-style: normal;
    font-size: 17px;
    text-transform: uppercase;
    p {
      color: #888;
      padding-bottom: 0;
      margin: 0;
    }
  }
`;

const Description = styled.div`
  grid-row: 5/8;
  grid-column: 1/4;
  //background-color: orangered;
  border-bottom: 1px solid #fff;
  padding: 20px;
  font-family: aktiv-grotesk-extended, serif;
  color: white;
  font-weight: 500;
  font-style: normal;
  font-size: 15px;
`;

const Click = styled.div`
  grid-row: 8/18;
  grid-column: 1/3;
  padding: 30px;
  //border-right: 1px solid #fff;
  div {
    // border: 1px solid #ddd;
    // background-color: rgb(10, 10, 10);
    height: 100%;
    width: 100%;
    border-radius: 5px;
    opacity: 1 !important;
  }
`;

const CardBody = styled.div`
  width: 400px;
  height: 552px;
  position: relative;
  border-radius: 0 0 5px 5px;
`;

const Card = ({ path, title, thumbnail, type, logo, subhead, description }) => {
  return (
    <Link href={path}>
      <div className="card">
        <CardDiv>
          <CardHead>
            <CardTitle>{title}</CardTitle>
            <Dot className="dot" type={type}></Dot>
          </CardHead>
          <CardBody>
            <CardImage src={thumbnail}></CardImage>
            <CardInfo className="cardInfo">
              <Logo>
                <img src={logo} />
              </Logo>
              <Subhead>
                <span>{subhead}</span>
              </Subhead>
              <Description>{description}</Description>
              <Click>
                <div></div>
              </Click>
            </CardInfo>
          </CardBody>
        </CardDiv>
      </div>
    </Link>
  );
};
export default Card;
