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
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.22), 0 2px 4px rgba(0, 0, 0, 0.34);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: inline-block;
  place-self: center;
  border: 1px solid #555;
  border-radius: 5px;

  &:hover {
    margin-top: -15px;
    margin-bottom: 15px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.35), 0 10px 10px rgba(0, 0, 0, 0.32);
    cursor: pointer;
    border: 1px solid #ccc;

    div {
      div {
        background-color: #fff;
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        transform: scale(1.1);
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
  width: 398px;
  height: 550px;
  object-fit: cover;
  position: relative;
  border-radius: 0 0 5px 5px;
`;

const Card = ({ path, title, thumbnail, type }) => {
  return (
    <Link href={path}>
      <div className="card">
        <CardDiv>
          <CardHead>
            <CardTitle>{title}</CardTitle>
            <Dot type={type}></Dot>
          </CardHead>
          <CardImage src={thumbnail}></CardImage>
        </CardDiv>
      </div>
    </Link>
  );
};
export default Card;
