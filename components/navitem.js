import styled from "styled-components";
import { useRef } from "react";
import gsap from "gsap";

const Main = styled.a`
  display: inline-block;
  position: relative;
  margin-right: 20px;
  div {
    clip-path: polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%);
    //transition: 0.2s ease;
  }
`;

const Txt = styled.span`
  font-size: 18px;
  font-family: "uniwars", sans-serif;
  color: #888;
  transition: 0.2s ease;
  cursor: pointer;
  &:hover {
    color: #eee;
    transition: 0.2s ease;
  }
`;

const Underline = styled.div`
  width: 100%;
  float: left;
  height: 1px;
  background-color: #eeeeee;
  position: absolute;
  bottom: 0;
`;

const NavItem = ({ Text, Link }) => {
  var hov = useRef();
  function enter() {
    gsap.fromTo(
      hov,
      {
        duration: 0,
        clipPath: "polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%) !important",
      },
      {
        duration: 0.2,
        ease: "power1",
        clipPath: "polygon(100% 0%, 100% 100%, 0% 100%, 0% 0%)",
      }
    );
  }
  function leave() {
    gsap.to(hov, {
      duration: 0.2,
      ease: "power1",
      clipPath: "polygon(100% 0%, 100% 100%, 100% 100%, 100% 0%)",
    });
  }
  return (
    <Main onMouseEnter={() => enter()} onMouseLeave={() => leave()} href={Link}>
      <Txt>{Text}</Txt>
      <Underline ref={(el) => (hov = el)} className="underline"></Underline>
    </Main>
  );
};

export default NavItem;
