import styled from "styled-components";
import React, { useEffect } from "react";
import mediumZoom from "medium-zoom";

import { CardCaption, CardMain, CardHead } from "./projectCardStyles";

const CardBody = styled.div`
  padding-bottom: 30px;
  height: 700px;
`;

const ImageWrapper = styled.div`
  height: 100%;
  max-width: 100%;
  background-color: rgb(244, 244, 244);
  img {
    width: 100%;
  }
`;

const Card = ({ title, image, caption }) => {
  const zoom = React.useRef();
  useEffect(() => {
    zoom.current = mediumZoom({ background: "#000", margin: 48 });
  }, []);

  return (
    <CardMain className="card">
      <CardHead>
        <span>{title}</span>
        <div></div>
      </CardHead>
      <CardBody>
        <ImageWrapper>
          <img src="/images/placeholder.png" />
        </ImageWrapper>
        <CardCaption>{caption}</CardCaption>
      </CardBody>
    </CardMain>
  );
};

const MemoizedCard = React.memo(Card);
export default MemoizedCard;
